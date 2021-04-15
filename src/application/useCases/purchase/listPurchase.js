module.exports = {
  async execute({ purchaseRepository }) {
    const purchases = await purchaseRepository.getAll();
    return purchases;
  },
};
