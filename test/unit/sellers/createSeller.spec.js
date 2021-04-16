const createSeller = require('../../../src/application/useCases/seller/newSeller');
const fakelocator = require('../../fakes/fakelocator');
const { BadRequestError } = require('../../../src/interfaces/http/http-errors')
const { ValidateError } = require('../../../src/domain/errors')

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
  it('Should to return custom error if seller data is invalid', async () => {
    await expect(createSeller.execute(request(undefined, 'usado', '2000'), fakelocator))
      .rejects.toEqual(new ValidateError('"name" is required'));
    await expect(createSeller.execute(request(0, 'usado', '2000'), fakelocator))
      .rejects.toEqual(new ValidateError('"name" must be a string'));
    await expect(createSeller.execute(request('carro', undefined, '2000'), fakelocator))
      .rejects.toEqual(new ValidateError('"image" is required'));
    await expect(createSeller.execute(request('carro', 0, '2000'), fakelocator))
      .rejects.toEqual(new ValidateError('"image" must be a string'));
    await expect(createSeller.execute(request('carro', 'usado', undefined), fakelocator))
      .rejects.toEqual(new ValidateError('"code" is required'));
    await expect(createSeller.execute(request('carro', 'usado', 0), fakelocator))
      .rejects.toEqual(new ValidateError('"code" must be a string'));
  });
});
