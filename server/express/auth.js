export const auth = (req, res, next) => {
  console.log("Authenticated");
  console.log(req);
  next();
};
