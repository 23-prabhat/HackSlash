
const express = require('express');
const router = express.Router();


const authMiddleware = require('../middleware/authMiddleware');


const {
  createApplication,
  getMyApplication,
  updateApplication,
  submitApplication,
} = require('../controllers/applicationController');


router.get('/my-application', authMiddleware, getMyApplication);


router.post('/', authMiddleware, createApplication);


router.put('/', authMiddleware, updateApplication);


router.patch('/submit', authMiddleware, submitApplication);


module.exports = router;
