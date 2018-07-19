class ProductController {
  async getProduct(req, res) {
    res.status(200).json({ message: 'Hello World' });
  }
}

module.exports = new ProductController();
