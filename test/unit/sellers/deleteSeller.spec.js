const { remove, create, list } = require('../../../src/application/useCases/seller');
const fakelocator = require('../../fakes/fakelocator')
const { BadRequestError } = require('../../../src/interfaces/http/http-errors')

function request(name, image, code) {
  return {
    name,
    image,
    code
  }
}

describe('Seller | Delete', () => {
  beforeAll(async () => {

  const requestData = request('joao', 'imgJoao', 'AAA')
  const requestData2 = request('Maria', 'imgMaria', 'BBB')

  await create.execute(requestData, fakelocator);
  await create.execute(requestData2, fakelocator);
  })
  it('Should to delete seller', async () => {

    await remove.execute('AAA', fakelocator)

    const sellers = await list.execute(fakelocator)

    expect(sellers.length).toEqual(1);
    expect(sellers).toEqual([request('Maria', 'imgMaria', 'BBB')])
  });

  it('Should to return a custom error if product id is invalid', async () => {
    await expect(remove.execute(null, fakelocator)).rejects.toEqual(new BadRequestError('Invalid seller id'));
  });
});
