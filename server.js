import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import expressLayout from "express-ejs-layouts";

import postRoute from "./api/routes/postRoute.js";
import interfaceRoute from "./api/routes/interfaceRoute.js";

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
app.use("/posts", postRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
