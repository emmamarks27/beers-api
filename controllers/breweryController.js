const Brewery = require('../models/BreweryModel');

const index = (req, res) => {
  const urlParams = req.query;
  console.log('urlParams', urlParams);
  try {
    //This show all does not exist yet
    const breweries = Brewery.showAll(urlParams);
    res.send(breweries);
  } catch (err) {
    res.status(500).send({ error: 'Something went wrong on our side.' });
    console.log(err);
  }
};

const show = (req, res) => {
  const idx = req.params.id;
  try {
    const brewery = Brewery.show(idx);
    res.send(brewery);
  } catch (err) {
    res.status(500).send({ error: 'Cannot find quote' });
  }
};

const showRandom = (req, res) => {
  try {
    const brewery = Brewery.showRandom();
    res.send(brewery);
  } catch (err) {
    res.status(500).send({ error: 'Error on our end' });
  }
};

module.exports = { index, show, showRandom };
