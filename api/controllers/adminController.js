import User from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerAdmin = (req, res) => {
  // name, password
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  User.findOne({ username })
    .then((user) => {
      if (user) {
        return res.status(400).json({ message: "User already exists" });
      }

      bcrypt
        .hash(password, 10)
        .then((hashedPassword) => {
          const user = new User({
            username,
            password: hashedPassword,
          });

          user
            .save()
            .then(() => {
              res.redirect("/manage/admin");
              // res.redirect("/login");
              // return res.status(200).json({ message: "User created successfully" });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    )
    .catch((err) => {
      console.log(err);
    }
    );
};

export const getToLoginAdmin = (req, res) => {
  res.render("manage", {
    locals: {
      title: "Login",
      description: "Free NodeJs User Management System",
    },
  });
};

export const checkLoginAdmin = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  User.findOne({ username })
    .then((user) => {
      if (!user) {
        return res.status(400).json({ message: "User does not exist" });
      }

      bcrypt
        .compare(password, user.password)
        .then((isMatched) => {
          if (isMatched) {
            const token = jwt.sign(
              { userId: user._id },
              process.env.JWT_SECRET,
              { expiresIn: "1d" } 
            );

            res.cookie("token", token, { httpOnly: true });

            res.redirect("/dashboard");
            return res.status(200).json({ message: "Login successful", token: token });
          } else {
            return res.status(400).json({ message: "Invalid credentials" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    }
    );
};

export const adminLogout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
  // return res.status(200).json({ message: "Logout successful" });
};


