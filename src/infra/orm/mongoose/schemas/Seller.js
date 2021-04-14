const uuid = require('uuid');
const mongoose = require('../index');

const sellerSchema = new mongoose.Schema({
  _id: { type: String, default: uuid.v1 },
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
  },
  code: {
    type: String,
    required: [true, 'Code is required'],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Seller', sellerSchema);
