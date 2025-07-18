
const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());


const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes'); 


app.get('/', (req, res) => {
  res.send('<h1>AYUSH Portal API</h1><p>Welcome!</p>');
});

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter); 

module.exports = app;
