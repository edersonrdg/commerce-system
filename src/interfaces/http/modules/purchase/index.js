const { Router } = require('express');
const purchaseController = require('./purchaseController');

const purchaseRouter = Router();

purchaseRouter.post('/:id', purchaseController.create);

module.exports = purchaseRouter;
