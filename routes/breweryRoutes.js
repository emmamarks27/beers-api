const express = require('express');
const Router = express.Router();
const breweries = require('../controllers/breweryController');

Router.get('/', breweries.index);
Router.get('/random', breweries.showRandom);
Router.get('/:id', breweries.show);
Router.get('search', breweries.search);
module.exports = Router;
