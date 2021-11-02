const router = require('express').Router();
const controller = require('./controllers.js');

// routes for retrieving all the products
router
  .route('/products')
  .get(controller.products.get)

// routes for retrieving reviews

// routes for retrieving questions and answers

// routes for retrieving list of products added to cart

module.exports = router;