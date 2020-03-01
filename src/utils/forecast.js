const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/688026e151c58d137a54f7b87d57e31e/' + latitude + ',' + longitude + '?units=si';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!');
    } else if (body.error) {
      callback('Unable to find location');
    } else {
      const rainProb = (body.currently.precipProbability * 100).toFixed(0);
      callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${rainProb} % chance of rain.`);
    }
  });
};

module.exports = forecast;
