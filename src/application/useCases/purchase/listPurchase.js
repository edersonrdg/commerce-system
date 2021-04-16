const { BadRequestError } = require('../../../interfaces/http/http-errors');

module.exports = {
  async execute(id, { purchaseRepository }) {
    if (id) {
      const purchase = await purchaseRepository.get(id);
      if (!purchase) throw new BadRequestError('Invalid purchase id');
      return purchase;
    }
    const purchases = await purchaseRepository.getAll();
    return purchases;
  },
};
