const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const path = require('path');

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

// Server static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);
