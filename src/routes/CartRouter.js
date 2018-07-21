const express = require('express');
const router = express.Router();
const CartController = require('../controllers/CartController');

router.get('/', CartController.getCart);
router.post('/', CartController.addToCart);

module.exports = router;
