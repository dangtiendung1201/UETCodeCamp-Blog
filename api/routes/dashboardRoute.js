import { Router } from "express";
import { Dashboard } from "../controllers/dashboardController.js";

const dashboardRoute = Router();

dashboardRoute.get("", Dashboard);

export default dashboardRoute;
