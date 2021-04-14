const { BadRequestError } = require('../../../interfaces/http/http-errors');

module.exports = {
  async execute(id, data, { sellerRepository }) {
    const seller = await sellerRepository.getSeller(id);
    if (!seller) throw new BadRequestError('Invalid seller id');

    const editSeller = await sellerRepository.edit(id, data);
    return editSeller;
  },
};
