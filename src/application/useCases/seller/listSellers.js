const { BadRequestError } = require('../../../interfaces/http/http-errors');

module.exports = {
  async execute(id, { sellerRepository }) {
    if (id) {
      const seller = await sellerRepository.getSeller(id);
      if (!seller) throw new BadRequestError('Invalid seller id');
      return seller;
    }
    const sellers = await sellerRepository.getAll();
    return sellers;
  },
};
