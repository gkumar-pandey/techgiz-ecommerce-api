import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  product_name: {
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
  image_url: {
    type: String,
  },
  alt: {
    type: String,
  },
  price: {
    type: String,
  },
  old_price: {
    type: String,
  },
  in_stock: {
    type: Boolean,
  },
  discount: {
    type: Number,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
});

const Products = mongoose.model('Products', productSchema);

export default Products;
