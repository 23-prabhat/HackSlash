<<<<<<< HEAD
const express = require('express');

const router = express.Router();

const { signup, login } = require('../controllers/authController');

router.post('/signup', signup);


router.post('/login', login);


module.exports = router;
=======
const express = require('express');

const router = express.Router();

const { signup, login } = require('../controllers/authController');

router.post('/signup', signup);


router.post('/login', login);


module.exports = router;
>>>>>>> 224938bb76f982a710d1f459b2a04c7b3afb16b3
