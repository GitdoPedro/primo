const express = require('express');
const primoController = require('../controller/primoController');

const router = express.Router();

router.post('/', primoController.create);
router.get('/:id',primoController.findById)
router.get('/', primoController.listAll);
router.put('/:id', primoController.update);
router.delete('/:id', primoController.delete);

module.exports = router;