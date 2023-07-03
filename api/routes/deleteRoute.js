import { Router } from "express";
import { deleteInterface, deleteAdmin } from "../controllers/deleteController";

const deteleRoute = Router();

deteleRoute.get("/:id", deleteInterface);
deteleRoute.delete("/:id", deleteAdmin);

export default deteleRoute;