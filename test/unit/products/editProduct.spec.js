const { edit, create, list } = require('../../../src/application/useCases/products');
const fakelocator = require('../../fakes/fakelocator')
const { BadRequestError } = require('../../../src/interfaces/http/http-errors')

function request(title, description, price) {
  return {
    title,
    description,
    price
  }
}

describe('Product | Edit', () => {
  beforeAll(async () => {

  const requestData = request('CARRO', 'USADO', 2000)
  const requestData2 = request('CARRO2', 'USADO', 2000)

  await create.execute(requestData, fakelocator);
  await create.execute(requestData2, fakelocator);
  })
  it('Should to edit product', async () => {
    const data = {
      description: 'new description',
      price: 1010
    }

    await edit.execute('CARRO', data, fakelocator)

    const product = await list.execute('CARRO', null, fakelocator)

    expect(product).toEqual({
      title: 'CARRO',
      description: 'new description',
      price: 1010
    })
  });
  it('Should to edit only params passed product', async () => {
    const data = {
      price: 1010
    }

    await edit.execute('CARRO2', data, fakelocator)

    const product = await list.execute('CARRO2', null, fakelocator)

    expect(product).toEqual({
      title: 'CARRO2',
      description: 'USADO',
      price: 1010
    })
  });

  it('Should to return a custom error if product id is invalid', async () => {
    await expect(edit.execute(null, null, fakelocator)).rejects.toEqual(new BadRequestError('Invalid product id'));
  });
})
