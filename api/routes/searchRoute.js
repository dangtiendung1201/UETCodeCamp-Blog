import { Router } from "express";
import { getAllPosts, searchPost, getPostById } from "../controllers/searchController.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const searchRoute = Router();

// GET
searchRoute.get("/", getAllPosts);
searchRoute.get("/search", searchPost);
searchRoute.get("/post/:id", getPostById);

export default searchRoute;