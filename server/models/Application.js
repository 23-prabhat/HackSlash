

const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema(
  {
    
    companyName: {
      type: String,
      trim: true,
      
    },
    address: {
      type: String,
      trim: true,
    },

    
    status: {
      type: String,
      enum: ['Draft', 'Pending', 'Approved', 'Rejected', 'Review'],
      default: 'Draft',
    },

    
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },

    
    documents: {
      panCard: { type: String, default: '' },
      aadharCard: { type: String, default: '' },
      fssaiLicense: { type: String, default: '' },
      incorporationCertificate: { type: String, default: '' },
      
    },

    
    comments: [
      {
        text: { type: String, required: true },
        authorName: { type: String, default: 'Official' },
        date: { type: Date, default: Date.now },
      },
    ],
  },
  
  { timestamps: true }
);

module.exports = mongoose.model('Application', ApplicationSchema);
