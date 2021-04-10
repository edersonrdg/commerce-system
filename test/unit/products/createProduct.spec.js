const createProduct = require('../../../src/application/useCases/products/createProduct');
const fakelocator = require('../../fakes/fakelocator');
const { BadRequestError } = require('../../../src/interfaces/http/http-errors')

describe('Create Product', () => {
  it('Should to create a new product', async () => {
    const requestData = {
      title: 'carro',
      description: 'usado',
      price: 2000,
    };
    const responseData = {
      title: 'carro',
      description: 'usado',
      price: 2000,
    };
    const product = await createProduct.execute(requestData, fakelocator);

    expect(product).toEqual(responseData);
  });
  it('Should to return custom error if product is already exists', async () => {
    const requestData = {
      title: 'carro',
      description: 'usado',
      price: 2000,
    };

    await expect(createProduct.execute(requestData, fakelocator)).rejects.toEqual(new BadRequestError('Product already exists'));
  })
});
