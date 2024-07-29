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

const validateSignUpScheme = Joi.object({
  username: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

export const validateSignUp = (credential: any) => {
  const validatedUser = validateSignUpScheme.validate(credential);
  if (validatedUser.error) return false;
  else return true;
};

const validatePartyScheme = Joi.object({
  name: Joi.string().required().messages({ name: `Provide valid name` }),
  phone: Joi.string()
    .required()
    .regex(/^[0-9]{10}$/)
    .messages({ phone: `Phone number must have 10 digits.` }),
  address: Joi.string().min(3).messages({ address: `Provide valid address` }),
  photo: Joi.string()
    .uri()
    .required()
    .messages({ photo: `Provide valid photo url` }),
  id: Joi.any(),
});

export const validateParty = (datas: any) => {
  console.log(datas);

  const validatedParty = validatePartyScheme.validate(datas);
  console.log(validatedParty);
  if (validatedParty.error) return false;
  else return true;
};

const validateTransactionScheme = Joi.object({
  amount: Joi.number().positive().required(),
  drcr: Joi.string().required(),
  description: Joi.string().min(3).required(),

  party: Joi.string().required(),
});

export const validateTransaction = (datas: any) => {
  console.log(datas);

  const validatedTransaction = validateTransactionScheme.validate(datas);
  console.log(validatedTransaction);
  if (validatedTransaction.error) return false;
  else return true;
};
