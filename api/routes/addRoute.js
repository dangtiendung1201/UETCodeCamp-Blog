import { Router } from "express";
import { addAdmin } from "../controllers/addController";

const addRoute = Router();

addRoute.post("/", addAdmin);

export default addRoute;