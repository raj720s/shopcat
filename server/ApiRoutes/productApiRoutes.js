import express from "express";
import expressAsyncHandler from "express-async-handler";
import {
  getAllproductsController,
  getProductbycategoryController,
  getProductbyIdController,
  rateProductById,
} from "../controllers/productController.js";
const productApiRouter = express.Router();

productApiRouter.get("/", getAllproductsController);
productApiRouter.get("/:id", getProductbyIdController);
productApiRouter.get("/:cat", (req, res) => {
  res.send(req.params.cat);
});
// productApiRouter.post("/rating/:id", (req, res) => {
//   res.send(req.params.id);
// });
productApiRouter.post("/:id/rating", rateProductById);

export default productApiRouter;
