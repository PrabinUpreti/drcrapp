import User from "../models/users.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();
export const login = async (req, res, next) => {
  try {
    const existUser = await User.findOne({ email: req.body.email });
    if (!existUser) return res.status(400).send("Invalid User or Password");
    const matchedPassword = await bcrypt.compare(
      req.body.password,
      existUser.password
    );
    console.log(matchedPassword);
    if (!matchedPassword)
      return res.status(400).send("Invalid User or Password");

    const token = existUser.generateAuthToken();
    res.status(200).send(token);
  } catch (error) {
    console.log(error);
    return "Existing information";
  }
};
