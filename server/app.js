const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const messages = require('./messages/routes/messages.routes');
const users = require('./users/routes/auth-routes');
const config = require('./config.json');

const app = express();
mongoose.connect(`${config.connectionString}message`);
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

/**
 * Define routes
 */
app.use(messages);
app.use(users)

module.exports = app;
