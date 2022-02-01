const auth = require('../controllers/authController')
const router = require('express').Router()

//register user
router.post('/user/register', auth.register)

//login
router.get('/user/login', auth.login)

module.exports = router