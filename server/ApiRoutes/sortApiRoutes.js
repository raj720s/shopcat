import express from "express";
import {
  sortProductBynameController,
  sortProductByPriceController,
  sortProductByRatingController,
} from "../controllers/productController.js";
const sortApiRoutes = express.Router();

// sortApiRoutes.get("/name", sortProductByDynamicController);
// sortApiRoutes.get("/price", sortProductByDynamicController);
// sortApiRoutes.get("/rating", sortProductByDynamicController);
sortApiRoutes.get("/name", sortProductBynameController);
sortApiRoutes.get("/price", sortProductByPriceController);
sortApiRoutes.get("/rating", sortProductByRatingController);

export default sortApiRoutes;
