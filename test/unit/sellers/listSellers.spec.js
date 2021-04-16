const { create, list } = require('../../../src/application/useCases/seller')
const fakelocator = require('../../fakes/fakelocator')
const { BadRequestError } = require('../../../src/interfaces/http/http-errors')

function request(name, image, code) {
  return {
    name,
    image,
    code
  }
}

describe('Seller | List', () => {
  beforeAll(async () => {

  const requestData = request('joao', 'imgJoao', 'AAA')
  const requestData2 = request('Maria', 'ImgMaria', 'BBB')

  await create.execute(requestData, fakelocator);
  await create.execute(requestData2, fakelocator);
  })
  it('Should to list all sellers', async () => {

    const sellers = await list.execute(null, fakelocator)

    expect(sellers).toEqual([request('joao', 'imgJoao', 'AAA'), request('Maria', 'ImgMaria', 'BBB')]);

    expect(sellers.length).toEqual(2);
  });
  it('Should to list especific seller', async () => {

    const seller = await list.execute('AAA', fakelocator)

    expect(seller).toEqual(request('joao', 'imgJoao', 'AAA'));

  })
  it('Should return error if id seller is invalid', async () => {
    await expect(list.execute('ABF', fakelocator)).rejects.toEqual(new BadRequestError('Invalid seller id'));
  });
})
