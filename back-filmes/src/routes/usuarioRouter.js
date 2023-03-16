const express = require('express')
const router = express.Router();

const usuarioController = require('../controllers/ususarioController')

router.get('/', usuarioController.list)
router.get('/:id', usuarioController.findById)
router.post('/createUser', usuarioController.create)
router.delete('/:id', usuarioController.delete)

module.exports = router;
