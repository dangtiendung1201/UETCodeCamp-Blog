import { Router } from "express";
import { getAllPosts, searchPost, getPostById, createPost, deletePost, editPost } from "../controllers/postController.js";
import { registerAdmin, getToLoginAdmin, checkLoginAdmin, adminLogout, getToAdminDashboard, getToAdminEdit, putAdmin, deleteAdmin } from "../controllers/adminController.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const postRoute = Router();


const authMiddleware = (req, res, next ) => {
    const token = req.cookies.token;
  
    if(!token) {
      return res.status(401).json( { message: 'Unauthorized'} );
    }
  
    try {
      const decoded = jwt.verify(token, jwtSecret);
      req.userId = decoded.userId;
      next();
    } catch(error) {
      res.status(401).json( { message: 'Unauthorized'} );
    }
  }

// GET
postRoute.get("/", getAllPosts);
postRoute.get("/search", searchPost);
postRoute.get("/:id", getPostById);

// ADMIN PART

//Register
postRoute.post("/register", registerAdmin);
//Login
postRoute.get("/admin", getToLoginAdmin);
postRoute.post("/admin", checkLoginAdmin);
//Logout
postRoute.get("/logout", adminLogout);
//Get to dashboard
postRoute.get("/dashboard", authMiddleware, getToAdminDashboard);
//Addpost(Thao's part)
//
//
//Edit
postRoute.get("/edit-post/:id",authMiddleware,getToAdminEdit);
postRoute.put("/edit-post/:id",authMiddleware,putAdmin);
//Delete
postRoute.delete("/delete-post/:id",authMiddleware,deleteAdmin);

export default postRoute;