const listProduct = require('../../../src/application/useCases/products/listProducts')
const createProduct = require('../../../src/application/useCases/products/createProduct');
const fakelocator = require('../../fakes/fakelocator')
const { BadRequestError } = require('../../../src/interfaces/http/http-errors')

describe('Product | List', () => {
  beforeAll(async () => {

  const requestData = {
    title: 'CARRO',
    description: 'USADO',
    price: 2000,
  };
  const requestData2 = {
    title: 'BICICLETA',
    description: 'USADO',
    price: 2000,
  };

  await createProduct.execute(requestData, fakelocator);
  await createProduct.execute(requestData2, fakelocator);
  })
  it('Should to list all products', async () => {

    const product = await listProduct.execute(null, {}, fakelocator)

    expect(product).toEqual([{
      title: 'CARRO',
      description: 'USADO',
      price: 2000,
      stock: 0
    },{
      title: 'BICICLETA',
      description: 'USADO',
      price: 2000,
      stock: 0
    }]);

    expect(product.length).toEqual(2);
  });
  it('Should to return especif product', async () => {

    const product = await listProduct.execute('CARRO', {}, fakelocator)

    expect(product).toEqual({
      title: 'CARRO',
      description: 'USADO',
      price: 2000,
      stock: 0
    });
  });
  it('Should to return product by query title', async () => {

    const product = await listProduct.execute(null , { title: 'bi' }, fakelocator)

    expect(product).toEqual([{
      title: 'BICICLETA',
      description: 'USADO',
      price: 2000,
      stock: 0
    }]);
  });

  it('Should to return a custom error if product id is invalid', async () => {
    await expect(listProduct.execute(3, {}, fakelocator)).rejects.toEqual(new BadRequestError('Invalid product id'));
  });
})
