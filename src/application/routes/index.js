const express = require('express');
const { route } = require('./products.route');
const router = new express.Router();
const productsRoute = require('./products.route');

router.use('/products', productsRoute);

module.exports = router;