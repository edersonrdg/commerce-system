const listProduct = require('../../../src/application/useCases/products/listProducts')
const createProduct = require('../../../src/application/useCases/products/createProduct');
const fakelocator = require('../../fakes/fakelocator')
const { BadRequestError } = require('../../../src/interfaces/http/http-errors')

describe('List Product', () => {
  beforeAll(async () => {

  const requestData = {
    title: 'carro',
    description: 'usado',
    price: 2000,
  };
  const requestData2 = {
    title: 'carro2',
    description: 'usado',
    price: 2000,
  };

  await createProduct.execute(requestData, fakelocator);
  await createProduct.execute(requestData2, fakelocator);
  })
  it('Should to list all products', async () => {

    const product = await listProduct.execute(null, fakelocator)

    expect(product.length).toEqual(2);
  });
  it('Should to return especif product', async () => {

    const product = await listProduct.execute('carro', fakelocator)

    expect(product).toEqual({
      title: 'carro',
      description: 'usado',
      price: 2000,
    });
  });

  it('Should to return a custom error if product id is invalid', async () => {
    await expect(listProduct.execute(3, fakelocator)).rejects.toEqual(new BadRequestError('Invalid product id'));
  });
})
