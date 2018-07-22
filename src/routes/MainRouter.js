const express = require('express');
const router = express.Router();
const MainController = require('../controllers/MainController');

router.get('/info', MainController.info);

module.exports = router;
