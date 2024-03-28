import express from "express";
import { dbConfig } from "../config/db.js";
import router from "./routes/routers.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use("/api", router);
dbConfig();

app.listen(process.env.SERVER_PORT || 8000, () =>
  console.log(`Server is running at ${process.env.SERVER_PORT}`)
);
