const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authControllers');

router.get('/login', authControllers.login);
router.post('/login', authControllers.loginBack);
router.get('/register', authControllers.register);
router.post('/register', authControllers.registerBack);
router.get('/logout', authControllers.logout);

module.exports = router;