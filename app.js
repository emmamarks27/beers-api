const express = require('express');
const cors = require('cors');
const breweriesRouter = require('./routes/breweryRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/breweries', breweryRoutes);

module.exports = app;
