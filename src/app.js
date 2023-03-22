import express from "express";
import cors from "cors";
import productRouter from "./router/product.router.js";
import mongoose from "mongoose";

const app = express();

app.use(cors({ credentials: true }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/products", productRouter);

mongoose.connect("mongodb://localhost:27017/web17301");

app.use("/", (req, res) => {
    res.send("hello word");
});
// app.listen(8000, () => {
//     console.log("I am running port 8000");
// });

export const viteNodeApp = app;
