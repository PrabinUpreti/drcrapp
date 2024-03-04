import Joi from "joi";

const userValidationSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

export const userValidation = (req, res, next) => {
  const validatedUser = userValidationSchema.validate(req.body);
  if (validatedUser.error) res.json(validatedUser.error.details[0].message);
  else next();
};
