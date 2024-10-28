import joi from 'joi';

export const createProductSchema = joi.object({
  productName: joi.string().required(),
  discription: joi.string(),
  brand: joi.string().required(),
  imageUrl: joi.string(),
  alt: joi.string(),
  price: joi.string().required(),
  oldPrice: joi.string(),
  inStock: joi.boolean(),
  discount: joi.number(),
  rating: joi.number().required().min(0).max(5),
});
