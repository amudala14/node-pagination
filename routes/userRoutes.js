const express = require('express');
const personController = require('../controllers/personController');

const router = express.Router();

router
.route('/page/:page/limit/:limit')
.get(personController.getUsers)

router
.route('/')
.post(personController.createUser)

module.exports = router;