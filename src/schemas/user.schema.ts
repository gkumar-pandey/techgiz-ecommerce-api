import Joi from "joi";

export const createUserValidation = Joi.object({
  fullName: Joi.string().required(),
  profileImageUrl: Joi.string(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const loginUserValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const addressValidation = Joi.object({
  street1: Joi.string().required(),
  street2: Joi.string(),
  pin_code: Joi.number().required(),
  city: Joi.string().required(),
  country: Joi.string().required(),
  district: Joi.string().required(),
});
