import { connectDb } from "./db/dbConnect.js";
import ProductModel from "./models/Products.js";
import { products } from "./seeder.js";
import dotenv from "dotenv";
dotenv.config();

await connectDb();

const seedData = async () => {
  try {
    await ProductModel.deleteMany();
    await ProductModel.insertMany(products)
      .then((ok) => {
        console.log("products inserted");
      })
      .catch((err) => {
        console.log("erred run seeder", err);
      });
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1); // 1 is a fail status
  }
};

const clearData = async () => {
  try {
    await ProductModel.deleteMany().then((ok) => {
      console.log("data cleared");
    });

    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

// node argv 2 is the second data

if (process.argv[2] === "-d") {
  clearData();
} else {
  seedData();
}
