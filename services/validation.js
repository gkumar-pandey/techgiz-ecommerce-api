const Joi = require("joi");

const createUserValidation = Joi.object({
  fullName: Joi.string().required(),
  profileImageUrl: Joi.string(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const loginUserValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const addressValidation = Joi.object({
  street: Joi.string().required(),
  zipCode: Joi.number().required(),
  city: Joi.string().required(),
  country: Joi.string().required(),
  district: Joi.string().required(),
});

module.exports = {
  createUserValidation,
  addressValidation,
  loginUserValidation,
};
