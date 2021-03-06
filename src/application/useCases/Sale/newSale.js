const Sale = require('../../../domain/sale/Sale');
const { BadRequestError } = require('../../../interfaces/http/http-errors');

module.exports = {
  async execute(data, { saleRepository, productRepository, sellerRepository }) {
    const {
      productId, sellerId, clientName, qnt,
    } = new Sale(data);

    const existProd = await productRepository.getProduct(productId);
    if (!existProd) throw new BadRequestError('Invalid product id');

    if (existProd.stock < qnt) throw new BadRequestError('This product has no stock');

    const existSeller = await sellerRepository.getSeller(sellerId);
    if (!existSeller) throw new BadRequestError('Invalid seller id');

    const newSale = await saleRepository.create(productId, sellerId, clientName, qnt);
    return newSale;
  },
};
