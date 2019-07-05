'use strict'

const express  = require('express');
const router = express.Router();
const controller  = require('../controllers/product-controller')

router.get('/', controller.get);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);
router.get('/:slug', controller.getBySlug);

//example how to handle duplicated routes
router.get('/admin/:id',controller.getById);

//tags
router.get('/tags/:tag',controller.getByTags);

module.exports = router;