
const Application = require('../models/Application');

/**
 * @desc    Create a new application
 * @route   POST /api/applications
 * @access  Private (Startup)
 */
const createApplication = async (req, res) => {
  try {
    // Check if the user already has an application to prevent duplicates.
    const existingApplication = await Application.findOne({ owner: req.user.userId });
    if (existingApplication) {
      return res.status(400).json({ success: false, message: 'You already have an active application.' });
    }

    // Set the owner of the application to the logged-in user's ID.
    const applicationData = { ...req.body, owner: req.user.userId };
    
    // Create the new application. The status will default to 'Draft'.
    const application = await Application.create(applicationData);

    res.status(201).json({ success: true, application });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

/**
 * @desc    Get the logged-in user's application
 * @route   GET /api/applications/my-application
 * @access  Private (Startup)
 */
const getMyApplication = async (req, res) => {
  try {
    // Find the application that belongs to the logged-in user.
    const application = await Application.findOne({ owner: req.user.userId });

    if (!application) {
      return res.status(404).json({ success: false, message: 'No application found. Please start a new one.' });
    }

    res.status(200).json({ success: true, application });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

/**
 * @desc    Update the user's application (Save as Draft)
 * @route   PUT /api/applications
 * @access  Private (Startup)
 */
const updateApplication = async (req, res) => {
  try {
    const { companyName, address, documents } = req.body;

    // Find the application to ensure it exists and is in a modifiable state.
    const application = await Application.findOne({ owner: req.user.userId });
    if (!application) {
      return res.status(404).json({ success: false, message: 'No application found to update.' });
    }
    
    // Prevent updates if the application has already been approved or rejected.
    if (application.status !== 'Draft' && application.status !== 'Review') {
      return res.status(400).json({ success: false, message: `Cannot update application with status: ${application.status}` });
    }

    // Update the fields.
    application.companyName = companyName || application.companyName;
    application.address = address || application.address;
    if (documents) {
      // Merge new document URLs with existing ones.
      application.documents = { ...application.documents, ...documents };
    }

    const updatedApplication = await application.save();
    res.status(200).json({ success: true, application: updatedApplication });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

/**
 * @desc    Submit the application for review
 * @route   PATCH /api/applications/submit
 * @access  Private (Startup)
 */
const submitApplication = async (req, res) => {
    try {
        // Find the user's application and update its status from 'Draft' to 'Pending'.
        const application = await Application.findOneAndUpdate(
            { owner: req.user.userId, status: 'Draft' },
            { status: 'Pending' },
            { new: true } // Return the updated document
        );

        if (!application) {
            return res.status(400).json({ success: false, message: 'Application not found or has already been submitted.' });
        }

        res.status(200).json({ success: true, message: 'Application submitted successfully!', application });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
};


module.exports = {
  createApplication,
  getMyApplication,
  updateApplication,
  submitApplication,
};
