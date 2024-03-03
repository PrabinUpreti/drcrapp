import express from "express";
const transactionRoutes = express.Router();

transactionRoutes.get("/", (req, res) => {
  res.send("Transantion Root");
});
transactionRoutes.post("/", (req, res) => {
  res.send("party post");
});

transactionRoutes.put("/:id", (req, res) => {
  res.send("party put");
});

transactionRoutes.delete("/:id", (req, res) => {
  res.send("party delete");
});
export default transactionRoutes;
