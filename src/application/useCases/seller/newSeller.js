const Seller = require('../../../domain/seller/Seller');

module.exports = {
  async execute(data, { sellerRepository }) {
    const {
      name, image, code,
    } = new Seller(data);

    const newproduct = await sellerRepository.create(name, image, code);
    return newproduct;
  },
};
