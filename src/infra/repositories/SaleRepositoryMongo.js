const SaleRepository = require('../../domain/sale/saleRepository');
const Sale = require('../orm/mongoose/schemas/Sale');
const Product = require('../orm/mongoose/schemas/Product');
const Seller = require('../orm/mongoose/schemas/Seller');

module.exports = class extends SaleRepository {
  constructor() {
    super();
  }

  async create(productId, sellerId, clientName) {
    const sale = new Sale({
      productId,
      sellerId,
      clientName,
    });

    await sale.save();

    return sale;
  }

  async getProductById(productId) {
    const [product] = await Product.find().where({ _id: productId });

    return product;
  }

  async getSellerById(sellerId) {
    const [seller] = await Seller.find().where({ _id: sellerId });
    return seller;
  }

  async get(id) {
    const [sale] = await Sale.find().where({ _id: id });
    return sale;
  }

  async getAll() {
    const sales = await Sale.find();
    return sales;
  }
};