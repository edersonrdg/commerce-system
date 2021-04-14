const { BadRequestError } = require('../../../interfaces/http/http-errors');

module.exports = {
  async execute(id, { sellerRepository }) {
    const existSeller = await sellerRepository.getSeller(id);
    if (!existSeller) throw new BadRequestError('Invalid seller id');

    await sellerRepository.remove(id);
  },
};
