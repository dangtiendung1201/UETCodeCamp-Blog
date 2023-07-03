import { Router } from "express";
import { getAllPosts, searchPost, getPostById } from "../controllers/searchController.js";

const searchRoute = Router();

// GET
searchRoute.get("/", getAllPosts);
searchRoute.get("/search", searchPost);
searchRoute.get("/:id", getPostById);

export default searchRoute;