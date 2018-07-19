const ProductRouter = require('./ProductRouter');

module.exports = app => {
  app.use('/api/products', ProductRouter);
};
