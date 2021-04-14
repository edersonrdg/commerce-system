const SellerRepository = require('../../domain/seller/sellerRepository');
const Seller = require('../orm/mongoose/schemas/Seller');

module.exports = class extends SellerRepository {
  constructor() {
    super();
  }

  async create(name, image, code) {
    const newSeller = new Seller({
      name,
      image,
      code,
    });

    await newSeller.save();

    return newSeller;
  }
};
