module.exports = {
  async execute({ sellerRepository }) {
    const products = await sellerRepository.getAll();
    return products;
  },
};
