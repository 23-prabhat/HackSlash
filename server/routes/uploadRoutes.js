
const express = require('express');
const router = express.Router();

// Import the Multer upload configuration from our config file.
const upload = require('../config/cloudinary');
// Import the authentication middleware to ensure only logged-in users can upload.
const authMiddleware = require('../middleware/authMiddleware');

/**
 * @route   POST /api/upload
 * @desc    Upload a single file to Cloudinary
 * @access  Private
 */
router.post('/', authMiddleware, upload.single('file'), (req, res) => {
  // 'upload.single('file')' is the core middleware.
  // - It expects the file to be sent in a field named 'file'.
  // - It processes the upload to Cloudinary.

  // If the upload is successful, Cloudinary provides the file information
  // in `req.file`.
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded.' });
  }

  // We send back a response containing the secure URL of the uploaded file.
  // The frontend will use this URL to update the application form.
  res.status(200).json({
    success: true,
    message: 'File uploaded successfully!',
    url: req.file.path, // 'req.file.path' contains the secure URL from Cloudinary
  });
});

module.exports = router;
