

require('dotenv').config();
const bcrypt = require('bcryptjs'); 

const app = require('./app'); 
const connectDB = require('./db/connect'); 
const User = require('./models/User'); 


const port = process.env.PORT || 5000;


const start = async () => {
  try {
    
    await connectDB(process.env.MONGO_URI);
    console.log('Successfully connected to MongoDB!');

    
     
    const officialEmail = process.env.OFFICIAL_EMAIL;
    const officialPassword = process.env.OFFICIAL_PASSWORD;

    if (officialEmail && officialPassword) {
      
      const officialExists = await User.findOne({ email: officialEmail });

      if (!officialExists) {
        
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(officialPassword, salt);

        await User.create({
          name: 'Official User', 
          email: officialEmail,
          password: hashedPassword,
          role: 'official', 
        });
        console.log('Default official user created successfully!');
      } else {
        console.log('Official user already exists.');
      }
    } else {
        console.warn('OFFICIAL_EMAIL or OFFICIAL_PASSWORD not found in .env. Skipping official user creation.');
    }
    
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    
    console.error('Failed to start the server:', error);
  }
};


start();
