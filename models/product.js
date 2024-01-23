const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    require: true,
  },
  discription: {
    type: String,
  },
  brand: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
  },
  alt: {
    type: String,
  },
  price: {
    type: String,
  },
  oldPrice: {
    type: String,
  },
  inStock: {
    type: Boolean,
  },
  discount: {
    type: Number,
  },
  rating: {
    type: rating,
    min: 0,
    max: 5,
    default: 0,
  },
});

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
