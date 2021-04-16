const { BadRequestError } = require('../../../interfaces/http/http-errors');

module.exports = {
  async execute(id, { purchaseRepository }) {
    const purchase = await purchaseRepository.get(id);
    if (!purchase) throw new BadRequestError('Invalid purchase id');

    await purchaseRepository.remove(id);
  },
};
