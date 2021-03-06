const { Router } = require('express');
const especificSaleController = require('./especificSaleController');
const saleController = require('./saleController');

const saleRouter = Router();

saleRouter.post('/', saleController.create);
saleRouter.get('/', saleController.index);
saleRouter.delete('/:id', saleController.delete);

saleRouter.get('/:id', especificSaleController.show);

module.exports = saleRouter;
