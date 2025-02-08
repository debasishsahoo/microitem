// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, itemController.createItem);
router.get('/', authMiddleware, itemController.getItems);
router.put('/:id', authMiddleware, itemController.updateItem);
router.delete('/:id', authMiddleware, itemController.deleteItem);

module.exports = router;
