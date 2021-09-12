var express = require('express');
var router = express.Router();

const orderPaymentsHandler = require('./handler/order-payment');

router.get('/', orderPaymentsHandler.getOrders);

module.exports = router;