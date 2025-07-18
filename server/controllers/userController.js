<<<<<<< HEAD

const User = require('../models/User'); 

const getProfile = async (req, res) => {
  try {
    const userId = req.user.userId;

    const user = await User.findById(userId).select('-password');

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found.' });
    }

    res.status(200).json({
      success: true,
      user: user,
    });

  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = {
  getProfile,
};
=======

const User = require('../models/User'); 

const getProfile = async (req, res) => {
  try {
    const userId = req.user.userId;

    const user = await User.findById(userId).select('-password');

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found.' });
    }

    res.status(200).json({
      success: true,
      user: user,
    });

  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = {
  getProfile,
};
>>>>>>> 224938bb76f982a710d1f459b2a04c7b3afb16b3
 