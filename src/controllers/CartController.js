const Cart = require('../models/CartModel');
const Product = require('../models/ProductModel');

class CartController {
  /**
   * Добавить продукт в корзину
   * @param {*} req
   * @param {*} res
   */
  async addToCart(req, res) {
    const { product_id, quantity } = req.body;

    if (!product_id || !quantity) {
      res.status(400).json({ error: 'Required parameters' });
    }

    const cart = new Cart(req.session.cart ? req.session.cart : {});

    try {
      const product = await Product.findOne({ id: product_id });

      if (!product) {
        res.status(400).json({ error: 'Product does not exist.' });
      }

      cart.add(product, product.id, quantity);
      req.session.cart = cart;

      res.status(200).json({ message: 'success' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  /**
   * Получить корзину
   * @param {*} req
   * @param {*} res
   */
  getCart(req, res) {
    if (!req.session.cart || req.session.cart.products.length === 0) {
      res.status(200).json({ message: 'Cart is empty' });
    }
    const cart = new Cart(req.session.cart);
    res.status(200).json({ cart });
  }

  /**
   * Удалить элемент из корзины
   * @param {*} req
   * @param {*} res
   */
  async removeFromCart(req, res) {
    if (!req.session.cart) {
      res.status(200).json({ message: 'Cart is empty' });
    }

    const product_id = req.params.id;
    const cart = new Cart(req.session.cart);

    try {
      const product = await Product.findOne({ id: product_id });

      if (!product) {
        res.status(400).json({ message: 'Product does not exist' });
      }

      cart.removeOne(product, product_id);

      req.session.cart = cart;
      res.status(200).json({ message: 'success' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new CartController();
