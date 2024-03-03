import bcrypt from "bcrypt";
const hash = async (planeText) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(planeText, salt);
  return hashed;
};
