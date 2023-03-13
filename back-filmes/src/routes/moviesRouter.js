const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController')

router.get('/', moviesController.list)
router.get('/:id', moviesController.getById)
router.post('/create', moviesController.create)
router.put('/:id', moviesController.update)
router.delete('/:id', moviesController.delete)

module.exports = router
