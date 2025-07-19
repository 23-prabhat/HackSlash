
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// Configure Cloudinary with the credentials from your .env file.
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer to use Cloudinary for storage.
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    // 'folder' specifies the folder name in your Cloudinary account
    // where the files will be stored.
    folder: 'ayush_portal_uploads',
    // 'allowed_formats' specifies the file types that are permitted.
    allowed_formats: ['jpg', 'png', 'pdf'],
    // You can add a public_id transformation if needed, but this is optional.
    // public_id: (req, file) => 'computed-filename-using-request',
  },
});

// Create the Multer upload instance with the configured storage.
const upload = multer({ storage: storage });

module.exports = upload;
