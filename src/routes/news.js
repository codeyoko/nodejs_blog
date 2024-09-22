const express = require('express');
const router = express.Router();

// [goi NewController]

const newController = require('../app/controllers/NewsController');

// [GET] /new/:slug
router.get('/:slug', newController.show);

// [GET] new
router.get('/', newController.index);

module.exports = router;
