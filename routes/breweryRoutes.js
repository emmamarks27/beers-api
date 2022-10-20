const express = require('express');
const Router = express.Router();
const breweries = require('../controllers/breweryController');

Router.get('/breweries', breweries.index);

module.exports = Router;
