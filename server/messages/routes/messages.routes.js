const express = require('express');
const router = express.Router();
const controls = require('../middlewares/controllers/messages.controller')

router.post('/messages', controls.create);
router.put('/messages/:_id', controls.update);
router.get('/messages', controls.getAllMessages);
router.get('/messges/:_id', controls.getMessage);
router.delete('/messages/:_id', controls.remove);

module.exports = router;
