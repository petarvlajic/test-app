const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');

//Route Files
const news = require('./routes/news');

//Load env vars
dotenv.config({ path: './config/config.env' });

//Connect to database
connectDB();

//Declare App
const app = express();
app.use(express.json());

//Mount routes
app.use('/news', news);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);
