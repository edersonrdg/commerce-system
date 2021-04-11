const listProduct = require('../../../src/application/useCases/products/listProducts')
const createProduct = require('../../../src/application/useCases/products/createProduct');
const fakelocator = require('../../fakes/fakelocator')

describe('Create Product', () => {
  it('Should to list all products', async () => {
    const requestData = {
      title: 'carro',
      description: 'usado',
      price: 2000,
    };
    await createProduct.execute(requestData, fakelocator);

    const responseData = [{
      title: 'carro',
      description: 'usado',
      price: 2000
    }]
    const product = await listProduct.execute(fakelocator);

    expect(product).toEqual(responseData);
  });
})
