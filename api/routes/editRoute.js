import { Router } from "express";
import { editAdmin } from "../controllers/editController";

const editRoute = Router();

editRoute.put("/:id", editAdmin);

export default editRoute;