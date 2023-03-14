const express = require('express')
const router = express.Router()
const genresController = require('../controllers/genresController')

router.get('/', genresController.genresList)
router.get('/:id', genresController.genresId)
router.post('/createGenre', genresController.genresCreate)
router.put('/:id', genresController.genresEdit)
router.delete('/:id', genresController.delete)


module.exports = router
