import { Router } from "express";
import { editInterface, editAdmin } from "../controllers/editController";

const editRoute = Router();

editRoute.get("/:id", editInterface);
editRoute.put("/:id", editAdmin);

export default editRoute;