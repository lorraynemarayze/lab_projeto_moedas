const userController = require('../controllers/userController');

const router = require('express').Router()

// definir para a rota do index
//router.get('/', (req, res) => res.render('index.tsx'));

router.get('/home', userController.getHomePage);

module.exports = router