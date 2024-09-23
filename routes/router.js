const express = require('express');
const router = express.Router();
const kiisha = require('../controller/KiishaController.js')

router.get('/', kiisha.kj);
router.get('/about', kiisha.kk);
router.get('/book', kiisha.kr);
router.get('/menu', kiisha.jj);
module.exports = router;