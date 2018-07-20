const ProductModel = require('../models/ProductModel');

class ProductController {
  async getProducts(req, res) {
    try {
      const products = await ProductModel.find();

      if (products.length === 0) {
        return res.status(200).json({ message: 'Product list is empty' });
      }

      res.status(200).json({ products });
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async createProduct(req, res) {
    const { id, name, description, price } = req.body;
    try {
      const product = await ProductModel.create({
        id,
        name,
        description,
        price
      });

      res.status(200).json({ message: 'Product created success.', product });
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}

module.exports = new ProductController();
