import bcrypt from "bcrypt";
export const hash = async (req, res, next) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashed;
  next();
};
