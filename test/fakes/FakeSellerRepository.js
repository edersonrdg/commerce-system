const sellerRepository = require('../../src/domain/seller/sellerRepository');

let sellers = [];

module.exports = class extends sellerRepository {
  constructor() {
    super();
  }

  getAll() {
    return sellers
  }

  remove(id) {
    sellers = sellers.splice(sellers.indexOf(sellers[id]), 1)
  }

  findByCode(code) {
    const seller = sellers.find(seller => seller.code === code)
    return seller
  }

  async create(name, image, code) {
    const data = { name, image, code };
    sellers.push(data);

    return data;
  }
  getSeller(id) {
    const seller = sellers.find(seller => seller.code === id)
    return seller
  }

  edit(id, data) {
    const { name, image, code } = data
    const seller = sellers.find(seller => seller.code === id)
    const index = sellers.indexOf(seller)

    sellers[index].name = name ? name : seller.name
    sellers[index].image = image ? image : seller.image
    sellers[index].code  = code  ? code  : seller.code
  }
};
