const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('product', productSchema);
