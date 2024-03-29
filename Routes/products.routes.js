const express = require('express');
const controllersProducts = require('../controllers/products');
const validate = require('../middlewares/validate');

const products = express.Router();

products.get('/', controllersProducts.getAll);
products.get('/:id', controllersProducts.getById);

products.post('/', validate.validationName, validate.validationQuantityProduct,
controllersProducts.create);

products.put('/:id', validate.validationName,
validate.validationQuantityProduct, controllersProducts.update);

products.delete('/:id', controllersProducts.exclude);

module.exports = products;