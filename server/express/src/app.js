import express from "express";
import { dbConfig } from "../config/db.js";
import router from "./routes/routers.js";

const app = express();

app.use(express.json());

app.use("/api", router);
dbConfig();

app.listen(process.env.SERVER_PORT || 8000, () =>
  console.log("Server is running in http://localhost:8000")
);
