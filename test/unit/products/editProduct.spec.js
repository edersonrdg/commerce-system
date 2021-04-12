const { edit, create, list } = require('../../../src/application/useCases/products');
const fakelocator = require('../../fakes/fakelocator')
const { BadRequestError } = require('../../../src/interfaces/http/http-errors')

describe('Edit Product', () => {
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
  it('Should to edit product', async () => {
    const data = {
      description: 'new description',
      price: 1010
    }

    await edit.execute('carro', data, fakelocator)

    const product = await list.execute('carro', fakelocator)

    expect(product).toEqual({
      title: 'carro',
      description: 'new description',
      price: 1010
    })
  });
  it('Should to edit only params passed product', async () => {
    const data = {
      price: 1010
    }

    await edit.execute('carro2', data, fakelocator)

    const product = await list.execute('carro2', fakelocator)

    expect(product).toEqual({
      title: 'carro2',
      description: 'usado',
      price: 1010
    })
  });

  it('Should to return a custom error if product id is invalid', async () => {
    await expect(edit.execute(null, null, fakelocator)).rejects.toEqual(new BadRequestError('Invalid product id'));
  });
})
