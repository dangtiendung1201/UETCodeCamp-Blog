import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import postRoute from "./api/routes/postRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

console.log(PORT);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL);
console.log("Database connected!");

// routing
app.get("/", (req, res) => {
    res.json({ success: true, message: "Welcome to express" }).status(200);
});

app.use("/posts", postRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
