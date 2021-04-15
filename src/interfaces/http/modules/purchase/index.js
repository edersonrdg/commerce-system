const { Router } = require('express');
const especificPurchaseController = require('./especificPurchaseController');
const purchaseController = require('./purchaseController');

const purchaseRouter = Router();

purchaseRouter.post('/:id', purchaseController.create);
purchaseRouter.get('/', purchaseController.index);
purchaseRouter.get('/:id', especificPurchaseController.show);

module.exports = purchaseRouter;
