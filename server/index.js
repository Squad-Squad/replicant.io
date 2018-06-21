const express = require('express');
const bodyParser = require('body-parser');

const db = require('../database-postgresql');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../react-client/dist`));