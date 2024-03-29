const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const models = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://192.168.99.101:27017/nodeapi', {useNewUrlParser:true});

models('./src/models');

app.use('/api', require('./src/routes'));
app.listen(3333); 