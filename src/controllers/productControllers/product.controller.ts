import { Request, Response } from 'express';
import Products from '../../models/product';

export const uploadProductHandler = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const newProduct = new Products(product);
    if (!newProduct) {
      return res.status(500).json({ message: 'Internal server error.' });
    }
    await newProduct.save();
    return res
      .status(201)
      .json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error.', error });
  }
};

export const getAllProductsHandler = async (req: Request, res: Response) => {
  try {
    const products = await Products.find();
    if (!products) {
      return res.status(404).json({ message: 'No products found' });
    }
    return res.status(200).json({ products, total_products: products.length });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error.' });
  }
};

export const deleteProductHandler = (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const deletedProduct = Products.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ success: false, message: 'Product not found' });
    }
    return res
      .status(200)
      .json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: 'Internal server error.', error });
  }
};
