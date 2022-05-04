const express = require('express');
const router = express.Router();
const { 
    getApiIndex,
    postRegisterUser
} = require('../controllers/apiController');

router.get('/', getApiIndex);

router.post('/register', postRegisterUser);

module.exports = router;