const Cart = require('../models/CartModel');
const Product = require('../models/ProductModel');

class CartController {
  async addToCart(req, res) {
    const { product_id, quantity } = req.body;

    if (!product_id || quantity) {
      res.status(400).json({ error: 'Required parameters' });
    }

    const cart = new Cart(req.session.cart ? req.session.cart : {});

    try {
      const product = await Product.findOne({ id: product_id });

      cart.add(product, product.id, quantity);
      req.session.cart = cart;

      res.status(200).json({ cart });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  getCart(req, res) {
    if (!req.session.cart) {
      res.status(200).json({ message: 'Cart is empty' });
    }
    const cart = new Cart(req.session.cart);
    res.status(200).json({ cart });
  }

  removeFromCart() {}
}

module.exports = new CartController();
