const authController = require('../controllers/authController.js');
const router = require('express').Router()

// editar para rota de login
// router.get('/login', (req, res) => res.render('login.tsx'));

router.get('/register', authController.renderRegister);

router.post('/register', authController.register);

router.post('/login', authController.login)

router.post('/logout', authController.logout)

module.exports = router