import expressAsyncHandler from "express-async-handler";
import ProductModel from "../models/Products.js";

// api/products

export const getAllproductsController = expressAsyncHandler(
  async (req, res) => {
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};

    const allproducts = await ProductModel.find({ ...keyword });
    res.json(allproducts);
  }
);

// /api/product/:id
export const getProductbyIdController = expressAsyncHandler(
  async (req, res) => {
    const id = req.params.id;
    if (id) {
      const product = await ProductModel.findById(id);
      res.json(product);
    }
  }
);

//  /api/category/:cat
export const getProductbycategoryController = expressAsyncHandler(
  async (req, res) => {
    // console.log(req.params);
    const category = req.params.cat;
    // const allproducts = await ProductModel.find({});
    if (category) {
      //   console.log(category);
      const catProducts = await ProductModel.find({ category: category });
      res.json(catProducts);
    } else {
      //   res.json(allproducts);
      res.status(500).json({ err: "bad req" });
    }
  }
);

//  get sorted formatted products from db
// api/product/name
export const sortProductBynameController = expressAsyncHandler(
  async (req, res) => {
    // const ascending = await ProductModel.find({}).sort((a, b) => {
    //   if (a.name < b.name) return -1;
    // });
    const sorting = await ProductModel.find({}).sort({ name: 1 });

    if (sorting) {
      res.json(sorting);
    } else res.json({ err: "couldnt sort" });
  }
);
// api/product/price
export const sortProductByPriceController = expressAsyncHandler(
  async (req, res) => {
    // const ascending = await ProductModel.find({}).sort((a, b) => {
    //   return a.price - b.price;
    // });
    const sorting = await ProductModel.find({}).sort({ price: 1 });

    if (sorting) {
      res.json(sorting);
    } else res.json({ err: "couldnt sort" });
  }
);
// api/product/rating
export const sortProductByRatingController = expressAsyncHandler(
  async (req, res) => {
    const sorting = await ProductModel.find({}).sort({ rating: -1 });

    if (sorting) {
      res.json(sorting);
    } else res.json({ err: "couldnt sort" });
  }
);
// export const sortProductByDynamicController = expressAsyncHandler(
//   async (req, res) => {
//     const dyna = req.params.sot;
//     console.log(dyna);
//     let sorting;
//     sorting = await ProductModel.find({}).sort({ dyna: 1 });

//     if (dyna == "rating") {
//       sorting = await ProductModel.find({}).sort({ dyna: -1 });
//     }

//     if (sorting) {
//       res.json({ sorting });
//     } else res.json({ err: "couldnt sort" });
//   }
// );
// api /product/:id/rating
export const rateProductById = expressAsyncHandler(async (req, res) => {
  //   console.log(req.body);
  //   res.send(req.params.id,req.body.rating);
  const rating = await req.body.rating;
  const product = await ProductModel.findById(req.params.id);
  // const rating = req.body.rating;
  if (product) {
    // console.log(product);
    product.rating = rating;
    const upProduct = await product.save();
    res.json(upProduct);
  } else {
    res.status(404).json({ err: "product with id ! found" });
  }
});
