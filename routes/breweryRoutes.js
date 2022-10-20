const express = require('express');
const Router = express.Router();
const breweries = require('../controllers/breweryController');

Router.get('/', breweries.index);
Router.get('/:id', breweries.show);
Router.get('/random', breweries.showRandom);

module.exports = Router;
