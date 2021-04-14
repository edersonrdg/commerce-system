const { Router } = require('express');
const saleController = require('./saleController');

const saleRouter = Router();

saleRouter.post('/', saleController.create);
saleRouter.get('/', saleController.index);

module.exports = saleRouter;
