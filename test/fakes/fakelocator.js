const FakeProductRepository = require('./fakeProductRepository');

function builderDean() {
  const beans = {
    productRepository: new FakeProductRepository(),
  };
  return beans;
}

module.exports = builderDean();
