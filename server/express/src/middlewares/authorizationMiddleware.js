import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
export const authorize = async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied No token provided");
  console.log(token);
  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token");
  }
};
