import Router from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const jwtSecret = process.env.JWT_SECRET;

import { registerAdmin, getToLoginAdmin, checkLoginAdmin, adminLogout  } from "../controllers/adminController";


export const authMiddleware = (req, res, next ) => {
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

const adminRoute = Router();

adminRoute.post("/register", registerAdmin);
adminRoute.get("/admin", getToLoginAdmin);
adminRoute.post("/admin", checkLoginAdmin);
adminRoute.get("/logout", adminLogout);

export default adminRoute;
