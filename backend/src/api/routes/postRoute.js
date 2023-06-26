import { Router } from "express";
import { createPost } from "../controllers/postController.js";

const postRoute = Router();

// GET
// postRoute.get("/", getAllPosts);
// postRoute.get("/search", searchPost);
// postRoute.get("/:id", getPostById);

// POST
postRoute.post("/", createPost);

// // PUT
// postRoute.put("/:id", updatePost);

// // DELETE
// postRoute.delete("/:id", deletePost);

export default postRoute;