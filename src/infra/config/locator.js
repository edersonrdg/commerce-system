const ProductRepositoryMongo = require('../repositories/ProductRepositoryMongo');
const SellerRepository = require('../repositories/SellerRepositoryMongo');

function builderDean() {
  const beans = {
    productRepository: new ProductRepositoryMongo(),
    sellerRepository: new SellerRepository(),
  };
  return beans;
}

module.exports = builderDean();
