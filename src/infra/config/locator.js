const ProductRepositoryMongo = require('../repositories/ProductRepositoryMongo');
const SellerRepository = require('../repositories/SellerRepositoryMongo');
const SaleRepositoryMongo = require('../repositories/SaleRepositoryMongo');

function builderDean() {
  const beans = {
    productRepository: new ProductRepositoryMongo(),
    sellerRepository: new SellerRepository(),
    saleRepository: new SaleRepositoryMongo(),
  };
  return beans;
}

module.exports = builderDean();
