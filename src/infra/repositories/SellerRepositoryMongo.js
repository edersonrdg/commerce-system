const SellerRepository = require('../../domain/seller/sellerRepository');
const Seller = require('../orm/mongoose/schemas/Seller');

module.exports = class extends SellerRepository {
  constructor() {
    super();
  }

  async findByCode(code) {
    const [seller] = await Seller.find().where({ code });
    return seller;
  }

  async create(name, image, code) {
    const newSeller = new Seller({
      name,
      image,
      code,
    });

    await newSeller.save();

    return newSeller;
  }

  async remove(id) {
    await Seller.findByIdAndDelete(id);
  }

  async getAll() {
    const sellers = await Seller.find();
    return sellers;
  }

  async getSeller(id) {
    const [seller] = await Seller.find().where({ _id: id });
    return seller;
  }

  async edit(id, data) {
    const { name, image, code } = data;
    const [seller] = await Seller.find().where({ _id: id });

    const editseller = await Seller.findByIdAndUpdate(id, {
      name: name || seller.name,
      image: image || seller.image,
      code: code || seller.code,
    });

    return editseller;
  }
};
