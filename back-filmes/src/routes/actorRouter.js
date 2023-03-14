const express = require('express')
const router = express.Router()
const actorController = require('../controllers/actorController')

router.get('/', actorController.actorList)
router.get('/:id', actorController.actorId)
router.post('/createActor', actorController.actorCreate)
router.put('/:id', actorController.actorUpdate)
router.delete('/:id', actorController.actorDelete)

module.exports = router
