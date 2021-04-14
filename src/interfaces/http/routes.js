const express = require('express');
const product = require('./modules/products');
const sellers = require('./modules/sellers');

const routes = express.Router();

routes.use(express.json());
routes.use('/products', product);
routes.use('/sellers', sellers);

module.exports = routes;
