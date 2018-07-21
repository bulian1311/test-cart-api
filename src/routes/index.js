const ProductRouter = require('./ProductRouter');
const CartRouter = require('./CartRouter');

module.exports = app => {
  app.use('/api/products', ProductRouter);
  app.use('/api/cart', CartRouter);
};
