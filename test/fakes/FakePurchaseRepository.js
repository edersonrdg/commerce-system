const purchaseRepository = require('../../src/domain/purchase/purchaseRepository')

const purchases = []

module.exports = class extends purchaseRepository {
  constructor() {
    super()
  }

  create(productId, qnt) {
    purchases.push({ productId, qnt })
    return { productId, qnt }
  }

  get() {}

  getAll() {
    return purchases
  }
}
