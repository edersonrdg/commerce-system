const purchaseRepository = require('../../src/domain/purchase/purchaseRepository')

let purchases = []

module.exports = class extends purchaseRepository {
  constructor() {
    super()
  }

  create(productId, qnt) {
    purchases.push({ productId, qnt })
    return { productId, qnt }
  }

  get(id) {
    return purchases[id]
  }

  getAll() {
    return purchases
  }

  remove(id) {
    purchases = purchases.splice(purchases.indexOf(purchases[id]), 1)
  }
}
