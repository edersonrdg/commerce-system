const uuid = require('uuid');
const mongoose = require('../index');

const purchaseSchema = new mongoose.Schema({
  _id: { type: String, default: uuid.v1 },
  productId: { type: String, ref: 'Product', required: [true, 'Product id required'] },
  qnt: {
    type: Number,
    required: [true, 'Quantity is required'],
  },
  cost: {
    type: Number,
    required: [true, 'Cost is required'],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('purchase', purchaseSchema);
