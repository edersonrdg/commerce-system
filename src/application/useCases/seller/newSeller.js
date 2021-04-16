const Seller = require('../../../domain/seller/Seller');
const { BadRequestError } = require('../../../interfaces/http/http-errors');

module.exports = {
  async execute(data, { sellerRepository }) {
    const {
      name, image, code,
    } = new Seller(data);

    const sellerExists = await sellerRepository.findByCode(code);

    if (sellerExists) throw new BadRequestError('Code seller already exists');

    const newproduct = await sellerRepository.create(name, image, code);
    return newproduct;
  },
};
