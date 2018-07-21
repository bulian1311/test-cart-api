const Cart = require('../models/CartModel');
const Product = require('../models/ProductModel');

class CartController {
  async addToCart(req, res) {
    const { product_id, quantity } = req.body;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    try {
      const product = await Product.findById(product_id);

      cart.add(product, product.id);
      req.session.cart = cart;

      console.log(req.session.cart);
    } catch (error) {
      res.status(400).json({ error });
    }
  }
}

module.exports = new CartController();
