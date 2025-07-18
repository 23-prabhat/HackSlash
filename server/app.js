<<<<<<< HEAD

// File: server/app.js

const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// --- Import Routers ---
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const applicationRouter = require('./routes/applicationRoutes'); 
const uploadRouter = require('./routes/uploadRoutes');

// --- Routes ---
app.get('/', (req, res) => {
  res.send('<h1>AYUSH Portal API</h1><p>Welcome!</p>');
});

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

app.use('/api/applications', applicationRouter);
app.use('/api/upload', uploadRouter); 

module.exports = app;
=======

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
>>>>>>> 224938bb76f982a710d1f459b2a04c7b3afb16b3
