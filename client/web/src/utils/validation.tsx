import Joi from "joi";

const validateLoginScheme = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

export const validateLogin = (credential: any) => {
  const validatedUser = validateLoginScheme.validate(credential);
  if (validatedUser.error) return false;
  else return true;
};
