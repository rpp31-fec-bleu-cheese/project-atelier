const axios = require('axios');
const config = require('../../config.js');

const server = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart';

const getProductsFromCart = (callback) => {
  let options = {
    url: server,
    method: 'get',
    headers: {
      'User-Agent': 'request',
      'Authorization': config.API_KEY
    }
  };

  axios(options)
    .then((response) => {
      // console.log(response.data);
      callback(response.data);
    })
    .catch((err) => {
      // console.log(err);
      callback(err);
    })
};

const addToCart = () => {

};


module.exports = {
  getProductsFromCart,
  addToCart
}