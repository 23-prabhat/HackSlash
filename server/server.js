require('dotenv').config();

const app = require('./app'); 
const connectDB = require('./db/connect'); 

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    
    await connectDB(process.env.MONGO_URI);
    console.log('Successfully connected to MongoDB!');

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    
    console.error('Failed to start the server:', error);
  }
};

start();












