const breweriesData = require('../breweryDB');
const { toSnakeCase } = require('./helper-functions');

class Brewery {
  constructor(breweryData) {
    this.id = breweryData.id;
    this.name = breweryData.name;
    this.brewery_type = breweryData.brewery_type;
    this.street = breweryData.street;
    this.address_2 = breweryData.address_2;
    this.address_3 = breweryData.address_3;
    this.city = breweryData.city;
    this.state = breweryData.state;
    this.county_province = breweryData.county_province;
    this.postal_code = breweryData.postal_code;
    this.country = breweryData.country;
    this.longitude = breweryData.longitude;
    this.latitude = breweryData.latitude;
    this.phone = breweryData.phone;
    this.website_url = breweryData.website_url;
    this.updated_at = breweryData.updated_at;
    this.created_at = breweryData.created_at;
  }

  static showAll(params) {
    let breweries = breweriesData.map(
        (brewery) => new Brewery(brewery)
    );
    if (params.by_city) {
      breweries = breweries.filter((brewery) => toSnakeCase(brewery.city) === params.by_city);
    }
    return breweries;
  }

  static show(id) {
    if (typeof id === 'string' && id.length > 0) {
        return new Brewery(breweriesData.find(brewery => brewery.id === id));
    } else {
      throw {
        statusCode: 404,
        message: 'Brewery not found.',
      };
    }
  }

  static showRandom() {
    const randIdx = Math.floor(Math.random() * breweriesData.length);
    return new Brewery(breweriesData[randIdx]);
  }

  static search(params) {
    let breweries = breweriesData.map(
        (brewery) => new Brewery(brewery)
    );

    if (params.query) {
      breweries = breweries.filter(
        (brewery) => RegExp(params.query).test(brewery.id)
      );
    }
    return breweries;
  }
}

module.exports = Brewery;
