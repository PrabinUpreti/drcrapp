import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
export const dbConfig = () => {
  mongoose
    .connect(
      `${process.env.DBMS}://${process.env.HOST}:${process.env.DB_PORT}/${process.env.DB}`
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
