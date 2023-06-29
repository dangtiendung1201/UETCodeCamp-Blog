import { Router } from "express";
import { Homepage, About } from "../controllers/interfaceController.js";

const interfaceRoute = Router();

interfaceRoute.get("", Homepage);
interfaceRoute.get("/about", About);


export default interfaceRoute;
