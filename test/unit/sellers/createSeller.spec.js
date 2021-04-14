const createSeller = require('../../../src/application/useCases/seller/newSeller');
const fakelocator = require('../../fakes/fakelocator');
const { BadRequestError } = require('../../../src/interfaces/http/http-errors')

function request(name, image, code) {
  return {
    name,
    image,
    code
  };
};

describe('Seller | Create', () => {
  it('Should to create a new product', async () => {
    const seller = await createSeller.execute(request('joao', 'linkImgJoao', 'CS123215'), fakelocator);

    expect(seller).toEqual(request('joao', 'linkImgJoao', 'CS123215'));
  });

  it('Should to return custom error if seller code is already exists', async () => {
    await expect(createSeller.execute(request('joao', 'linkImgJoao', 'CS123215'), fakelocator))
      .rejects.toEqual(new BadRequestError('Code seller already exists'));
  });
});
