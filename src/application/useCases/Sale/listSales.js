module.exports = {
  async execute({ saleRepository }) {
    const sales = await saleRepository.getAll();
    return sales;
  },
};
