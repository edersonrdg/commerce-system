module.exports = {
  async execute({ productRepository }) {
    const products = productRepository.getproducts();
    return products;
  },
};
