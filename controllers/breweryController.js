const Brewery = require('../breweryModel');

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

module.exports = { index };
