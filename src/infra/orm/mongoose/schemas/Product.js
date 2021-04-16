const uuid = require('uuid');
const mongoose = require('../index');

const productSchema = new mongoose.Schema({
  _id: { type: String, default: uuid.v1 },
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  stock: {
    type: Number,
    default: 0,
  },
  sales: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);
