const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const messages = require('./messages/routes/crud-routes');
const session = require('express-session');

const app = express();
mongoose.connect('mongodb://localhost/message');
mongoose.connect('mongodb://localhost/users');
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

app.use(messages);

module.exports = app;
