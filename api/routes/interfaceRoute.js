import { Router } from "express";
import { Homepage, About, Contact, Manage, getBlog} from "../controllers/interfaceController.js";

const interfaceRoute = Router();

interfaceRoute.get("", Homepage);
interfaceRoute.get("/about", About);
interfaceRoute.get("/contact", Contact);
interfaceRoute.get("/Manage", Manage);

export default interfaceRoute;
