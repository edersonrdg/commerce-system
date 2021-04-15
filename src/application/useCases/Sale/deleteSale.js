const { BadRequestError } = require('../../../interfaces/http/http-errors');

module.exports = {
  async execute(id, { saleRepository }) {
    const sale = await saleRepository.get(id);
    if (!sale) throw new BadRequestError('Invalid sale id');

    await saleRepository.remove(id);
  },
};
