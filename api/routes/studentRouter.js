const router = require('express').Router();
const studentController = require('../controllers/studentController');

//Register
router.post('/register', studentController.register);

module.exports = router;