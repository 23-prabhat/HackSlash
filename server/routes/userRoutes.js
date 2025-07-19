<<<<<<< HEAD

const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');

const { getProfile } = require('../controllers/userController');

router.get('/profile', authMiddleware, getProfile);


module.exports = router;
=======

const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');

const { getProfile } = require('../controllers/userController');

router.get('/profile', authMiddleware, getProfile);


module.exports = router;
>>>>>>> 224938bb76f982a710d1f459b2a04c7b3afb16b3
