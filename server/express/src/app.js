import express from "express";
import { dbConfig } from "../config/db.js";
import router from "./routes/routers.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
console.log("URL", process.env.CLIENT_URL);
app.use(
  cors({
    origin: `${process.env.CLIENT_URL}`,
    exposedHeaders: "Authorization",
  })
);

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Express Restful Apis");
});

app.use("/api", router);
dbConfig();

app.listen(process.env.SERVER_PORT || 8000, () =>
  console.log(`Server is running at ${process.env.SERVER_PORT}`)
);
