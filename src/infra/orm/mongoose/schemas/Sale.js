const uuid = require('uuid');
const mongoose = require('../index');

const saleSchema = new mongoose.Schema({
  _id: { type: String, default: uuid.v1 },
  productId: { type: String, ref: 'Product', required: [true, 'Product id required'] },
  sellerId: { type: String, ref: 'Seller', required: [true, 'Seller id required'] },
  qnt: {
    type: Number,
    required: [true, 'qnt id required'],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Sale', saleSchema);
