const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const indexRouter = require('./routes/crudRoutes');

const app = express();
mongoose.connect('mongodb://localhost/message')
mongoose.Promise = global.Promise;

/**
 * Check if mongoDB is runing
 */
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Momngodb is successfully running')
});
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRouter);

module.exports = app;
