const Product = require('../models/ProductModel');

class ProductController {
  /**
   * Получить все продукты
   * @param {*} req
   * @param {*} res
   */
  async getProducts(req, res) {
    try {
      const products = await Product.find();

      if (products.length === 0) {
        return res.status(200).json({ message: 'Product list is empty' });
      }

      res.status(200).json({ products });
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  /**
   * Создать новый продукт
   * @param {*} req
   * @param {*} res
   */
  async createProduct(req, res) {
    const { id, name, description, price } = req.body;
    try {
      const product = await Product.create({
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
