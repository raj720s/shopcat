// const express = require("express");
import express from "express";
// const cors = require("cors");
// const products = require("./seeder");
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { products } from "./seeder.js";
import { connectDb } from "./db/dbConnect.js";
import productApiRouter from "./ApiRoutes/productApiRoutes.js";
import categoryApiRoute from "./ApiRoutes/categoryApiRoute.js";
import sortApiRoutes from "./ApiRoutes/sortApiRoutes.js";
import path from "path";
const app = express();
app.use(express.json());
app.use(cors());
const __dirname = path.resolve();

connectDb();

app.listen(5000, console.log("server running"));

// app.get("/", (req, res) => {
//   res.send("got the url/");
// });

// app.get("/api/products", (req, res) => {
//   res.json(products);
// });
app.use("/api/product", productApiRouter);
// t
app.use("/api/category", categoryApiRoute);
app.use("/api/sort", sortApiRoutes);

// app.get("/api/product/:id", (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);
//   res.json(product);
// });

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/appy/build/index.html")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "appy", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("api serving");
  });
}

console.log(__dirname);
