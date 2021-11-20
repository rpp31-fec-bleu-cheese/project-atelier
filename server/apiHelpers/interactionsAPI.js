const axios = require('axios');
const config = require('../../config.js');

const server = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions';

const postUserInteraction = (interaction, callback) => {
  let options = {
    url: server,
    method: 'post',
    headers: {
      'User-Agent': 'request',
      'Authorization': config.API_KEY
    },
    data: interaction
  }

  axios(options)
    .then((response) => {
      callback(null, response.data)
    })
    .catch((err) => {
      console.log(err);
    })
}

module.exports.postUserInteraction = postUserInteraction;