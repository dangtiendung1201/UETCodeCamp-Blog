import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import expressLayout from "express-ejs-layouts";

import searchRoute from "./api/routes/searchRoute.js";
import interfaceRoute from "./api/routes/interfaceRoute.js";
import adminRoute from "./api/routes/adminRoute.js";
import deteleRoute from "./api/routes/deleteRoute.js";
import editRoute from "./api/routes/editRoute.js";
import addRoute from "./api/routes/addRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

console.log(PORT);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL);
console.log("Database connected!");

app.use(express.static('public'));

app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// routing
app.use("/", interfaceRoute);
app.use("/posts", searchRoute);
app.use("/manage", adminRoute);
app.use("/delete", deteleRoute);
app.use("/edit", editRoute);
app.use("/add", addRoute);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
