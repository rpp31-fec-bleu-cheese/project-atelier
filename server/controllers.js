const products = require('./apiHelpers/productsAPI.js');
const cart = require('./apiHelpers/cartAPI.js');
const qanda = require('./apiHelpers/qandaAPI.js');
const reviews = require('./apiHelpers/reviewsAPI.js');


module.exports = {
  products: {
    get: function(req, res) {
      // use api helpers;
    }
  },
  reviews: {
    get: function(req, res) {

    }
  },
  questions_answers: {
    get: function(req, res) {

    },
    post: function(req, res) {

    }
  },
  cart: {
    get: function(req, res) {

    },
    post: function(req, res) {

    }
  },
  interactions: {

  }
};