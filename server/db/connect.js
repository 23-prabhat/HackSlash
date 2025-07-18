<<<<<<< HEAD
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongDB connected...');
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
=======
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongDB connected...');
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
>>>>>>> 224938bb76f982a710d1f459b2a04c7b3afb16b3
