const { remove, create, list } = require('../../../src/application/useCases/products');
const fakelocator = require('../../fakes/fakelocator')
const { BadRequestError } = require('../../../src/interfaces/http/http-errors')

describe('Delete Product', () => {
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

  await create.execute(requestData, fakelocator);
  await create.execute(requestData2, fakelocator);
  })
  it('Should to delete product', async () => {

    await remove.execute('CARRO', fakelocator)

    const product = await list.execute(null, {}, fakelocator)

    expect(product.length).toEqual(1);
    expect(product).toEqual([{
      title: 'CARRO2',
      description: 'USADO',
      price: 2000,
    }])
  });

  it('Should to return a custom error if product id is invalid', async () => {
    await expect(remove.execute(null, fakelocator)).rejects.toEqual(new BadRequestError('Invalid product id'));
  });
})
