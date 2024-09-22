const express = require('express');

const router = express.Router();

// [goi NewController]

const courseController = require('../app/controllers/CourseController');

// [GET] /new/:slug

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.post('/form-actions', courseController.formActions);
router.post('/handle-form-actions',courseController.handleFormActions )
router.get('/:slug', courseController.show);

module.exports = router;
