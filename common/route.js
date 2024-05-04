const express = require('express');
const router = express.Router();
const commonController = require('./controller');

router.get('/', commonController.getIndex);

module.exports = router;