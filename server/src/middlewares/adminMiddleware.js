export const admin = (req, res, next) => {
  if (!req.user.isAdmin) return res.status(403).send("Can't Access");
  next();
};
