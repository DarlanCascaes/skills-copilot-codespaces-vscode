// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Comment = require('./commentSchema');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://