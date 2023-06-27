import { Router } from "express";
import { Homepage, About } from "../controllers/mainController.js";

const mainRoute = Router();

mainRoute.get("/", Homepage);
mainRoute.get("/about", About);

export default mainRoute;
