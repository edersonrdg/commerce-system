const express = require('express');
const product = require('./modules/products');
const sellers = require('./modules/sellers');
const sale = require('./modules/sale');

const routes = express.Router();

routes.use(express.json());
routes.use('/products', product);
routes.use('/sellers', sellers);
routes.use('/sales', sale);

module.exports = routes;
