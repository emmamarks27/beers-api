const breweriesData = require('../breweryDB');

class Brewery {
  constructor(
    id,
    name,
    brewery_type,
    street,
    address_2,
    address_3,
    city,
    state,
    county_province,
    postal_code,
    country,
    longitude,
    latitude,
    phone,
    website_url,
    updated_at,
    created_at
  ) {
    this.id = id;
    this.name = name;
    this.brewery_type = brewery_type;
    this.street = street;
    this.address_2 = address_2;
    this.address_3 = address_3;
    this.city = city;
    this.state = state;
    this.county_province = county_province;
    this.postal_code = postal_code;
    this.country = country;
    this.longitude = longitude;
    this.latitude = latitude;
    this.phone = phone;
    this.website_url = website_url;
    this.updated_at = updated_at;
    this.created_at = created_at;
  }

  static showAll(params) {
    let breweries = breweriesData.map(
      (brewery) => new Brewery(...Object.values(brewery))
    );
    if (params.by_city) {
      breweries = breweries.filter(
        (brewery) => brewery.city === params.by_city
      );
    }
    return breweries;
  }

  static show(id) {
    if (typeof id === 'string' && id.length > 0) {
      return new Brewery(
        ...Object.values(breweriesData.find((brewery) => brewery.id === id))
      );
    } else {
      throw {
        statusCode: 404,
        message: 'Brewery not found.',
      };
    }
  }

  static showRandom() {
    const randIdx = Math.floor(Math.random() * breweriesData.length);
    return new Brewery(...Object.values(breweriesData[randIdx]));
  }
}

module.exports = Brewery;
