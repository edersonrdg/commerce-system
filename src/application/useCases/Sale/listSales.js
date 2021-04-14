const { BadRequestError } = require('../../../interfaces/http/http-errors');

module.exports = {
  async execute(id, { saleRepository }) {
    if (id) {
      const sale = await saleRepository.get(id);
      if (!sale) throw new BadRequestError('Invalid sale id');
      return sale;
    }
    const sales = await saleRepository.getAll();
    return sales;
  },
};
