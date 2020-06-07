const express = require('express');
const bodyParser = require('body-parser');
const router = require('../routes');
const consign = require('consign');
const autorizacao = require('../helpers/basic-auth');
const app = express();

consign().include('./server/controllers').into(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(autorizacao);

app.use('/', router);

module.exports = app;