
const isOfficial = (req, res, next) => {
  
  if (req.user && req.user.role === 'official') {
    
    next();
  } else {
    
    res.status(403).json({ success: false, message: 'Access denied. You must be an official to perform this action.' });
  }
};

module.exports = isOfficial;
