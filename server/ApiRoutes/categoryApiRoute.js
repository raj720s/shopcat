import express from "express";
import { getProductbycategoryController } from "../controllers/productController.js";

const categoryApiRoute = express.Router();

// categoryApiRoute.get("/:cat", (req, res) => {
//   res.send(req.params.cat);
// });
categoryApiRoute.get("/:cat", getProductbycategoryController);

export default categoryApiRoute;
