import { Router } from "express";
import { deleteAdmin } from "../controllers/deleteController";

const deteleRoute = Router();

deteleRoute.delete("/:id", deleteAdmin);

export default deteleRoute;