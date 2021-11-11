const axios = require('axios');
const config = require('../../config.js');

const server = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/'

const getAllProducts = (callback) => {
  let options = {
    url: server,
    method: 'get',
    headers: {
      'User-Agent': 'request',
      'Authorization': config.API_KEY
    },
    params: {
      page: 1,
      count: 5
    }
  }

  axios(options)
    .then((response) => {
      callback(null, response.data);
    })
    .catch((err) => {
      callback(err);
    })
};

const getProduct = (productID, callback) => {
  let options = {
    url: server + productID,
    method: 'get',
    headers: {
      'User-Agent': 'request',
      'Authorization': config.API_KEY
    },
  }

  axios(options)
    .then((response) => {
      callback(null, response.data);
    })
    .catch((err) => {
      callback(err);
    })
};

const getProductStyle = (productID, callback) => {
  let options = {
    url: server + productID + '/styles',
    method: 'get',
    headers: {
      'User-Agent': 'request',
      'Authorization': config.API_KEY
    }
  };

  axios(options)
    .then((response) => {
      callback(null, response.data);
    })
    .catch((err) => {
      console.log('RESPONSE ERR:', err)
      callback(err);
    })
};

const getRelatedProducts = (productID, callback) => {
  let options = {
    url: server + productID + '/related',
    method: 'get',
    headers: {
      'User-Agent': 'request',
      'Authorization': config.API_KEY
    }
  };

  axios(options)
    .then((response) => {
      callback(null, response.data);
    })
    .catch((err) => {
      callback(err);
    })
};


module.exports = {
  getAllProducts,
  getProduct,
  getProductStyle,
  getRelatedProducts
};