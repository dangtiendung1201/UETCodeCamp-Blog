import { Router } from "express";
import { addInterface, addAdmin } from "../controllers/addController";

const addRoute = Router();

addRoute.get("/", addInterface);
addRoute.post("/", addAdmin);

export default addRoute;