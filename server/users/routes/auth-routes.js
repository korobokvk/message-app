const express = require('express');
const router = express.Router();
const controls = require('../middlewares/controllers/user.controller');

router.post('/users/authentificate', controls.authenticate);
router.post('/users/register', controls.register);
router.get('/users', controls.getAllUser);
router.get('/users/current', controls.getCurrentUser);
router.put('/users/:_id', controls.update);
router.delete('/users/:_.id', controls.remove);

module.exports = router;