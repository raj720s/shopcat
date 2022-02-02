import mongoose from "mongoose";

export const connectDb = async () => {
  await mongoose
    .connect(process.env.mongo_string, {
      useNewUrlParser: true,
    })
    .then((ok) => {
      console.log("connected");
    })
    .catch((err) => {
      console.log("err", err);
      process.exit(1);
    });
};
