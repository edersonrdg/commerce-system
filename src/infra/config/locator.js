const ProductRepositoryMongo = require('../repositories/ProductRepositoryMongo');

function builderDean() {
  const beans = {
    productRepository: new ProductRepositoryMongo(),
  };
  return beans;
}

module.exports = builderDean();
