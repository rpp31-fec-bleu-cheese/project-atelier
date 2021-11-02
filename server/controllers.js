const products = require('./apiHelpers/productsAPI.js');
const cart = require('./apiHelpers/cartAPI.js');
const qanda = require('./apiHelpers/qandaAPI.js');
const reviews = require('./apiHelpers/reviewsAPI.js');

module.exports = {
  products: {
    getAllProducts: function(req, res) {
      console.log(req.params);
      console.log(req.query);
      console.log(req.body);

      products.getAllProducts((err, data) => {
        if (err) {
          res.status(404).send();
          return;
        }

        res.status(200).send(data);

      });
    },
    getProductByID: function(req, res) {
      console.log('inside getProduct');
      products.getProduct(req.params.product_id, (err, data) => {
        if (err) {
          res.status(404).send();
          return;
        }

        res.status(200).send(data);
      });
    },
    getProductStyleByID: function(req, res) {
      console.log('inside getProductsStyleByID');
      let productID = req.params.product_id;

      products.getProductStyle(productID, (err, data) => {
        if (err) {
          res.status(404).send();
          return;
        }

        res.status(200).send(data);
      });
    },
    getRelatedProductsByID: function(req, res) {
      let productID = req.params.product_id;

      products.getRelatedProducts(productID, (err, data) => {
        if (err) {
          res.status(404).send();
          return;
        }

        res.status(200).send(data);
      });
    }
  },
  reviews: {
    get: function(req, res) {
      // use api helpers
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