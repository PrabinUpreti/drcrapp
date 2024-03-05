import User from "../models/users.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

dotenv.config();
export const login = async (req, res, next) => {
  try {
    const existUser = await User.findOne({ email: req.body.email });
    if (!existUser) res.status(400).send("Invalid User or Password");
    const matchedPassword = await bcrypt.compare(
      req.body.password,
      existUser.password
    );
    console.log(matchedPassword);
    if (!matchedPassword) res.status(400).send("Invalid User or Password");

    const token = jwt.sign({ _id: existUser._id }, process.env.JWT_TOKEN);
    res.status(200).send(token);
  } catch (error) {
    console.log(error);
    return "Existing information";
  }
};
