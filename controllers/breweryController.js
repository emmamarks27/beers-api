const Brewery = require('../models/BreweryModel');

const index = (req, res) => {
  try {
    //This show all does not exist yet
    const breweries = Brewery.showAll();
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

module.exports = { index, show };
