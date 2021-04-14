const createSeller = require('../../../src/application/useCases/seller/newSeller');
const fakelocator = require('../../fakes/fakelocator');

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
});
