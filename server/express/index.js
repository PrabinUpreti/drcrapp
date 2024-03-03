import express from "express";
import dotenv from "dotenv";
import { auth } from "./auth.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use(auth);

app.get("/", (req, res) => {
  res.send("<h1>Hello I am Dr Cr App</h1>");
});

app.listen(process.env.$PORT || 8000, () => {
  console.log("Server Running");
});
