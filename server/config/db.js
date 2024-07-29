import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
export const dbConfig = () => {
  let url = "";
  process.env.MONGODBURL
    ? (url = process.env.MONGODBURL)
    : (url = `${process.env.DBMS}://${process.env.HOST}:${process.env.DB_PORT}/${process.env.DB}`);
  mongoose
    .connect(
      url
      // {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      // }
    )
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB", error);
    });
};
