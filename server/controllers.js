const products = require('./apiHelpers/productsAPI.js');
const cart = require('./apiHelpers/cartAPI.js');
const qanda = require('./apiHelpers/qandaAPI.js');
const reviews = require('./apiHelpers/reviewsAPI.js');

module.exports = {
  // PRODUCT CONTROLLERS
  products: {
    getAllProducts: function(req, res) {
      products.getAllProducts((err, data) => {
        if (err) {
          res.status(404).send();
          return;
        }

        res.status(200).send(data);

      });
    },
    getProductByID: function(req, res) {
      products.getProduct(req.params.product_id, (err, data) => {
        if (err) {
          res.status(404).send();
          return;
        }

        res.status(200).send(data);
      });
    },
    getProductStyleByID: function(req, res) {
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
  // REVIEWS CONTROLLERS
  reviews: {
    getAllReviews: function(req, res) {
      let productID = req.query.product_id;
      let sort = req.query.sort;

      reviews.getReviews(productID, sort, (err, data) => {
        if (err) {
          res.status(404).send();
          return;
        }

        res.status(200).send(data);
      })
    },
    getReviewsMeta: function(req, res) {
      let productID = req.query.product_id;

      reviews.getMetaReviews(productID, (err, data) => {
        if (err) {
          res.status(404).send();
          return;
        }

        res.status(200).send(data);
      })
    },
    postReviews: function(req, res) {
      let reviewData = req.body;

      reviews.postReviewData(reviewData, (err, data) => {
        if (err) {
          res.status(400).send();
          return;
        }

        res.status(201).send(data);
      })
    }
  },
  // QUESTION & ANSWER CONTROLLERS
  questions_answers: {
    getAllQuestions: function(req, res) {
      let productID = req.query.product_id;
      qanda.getQuestions(productID, (err, data) => {
        if (err) {
          res.status(404).send();
          return;
        }

        res.status(200).send(data);
      })
    },
    getAnswers: function(req, res) {
      let questionID = req.params.question_id;
      qanda.getAnswersByID(questionID, (err, data) => {
        if (err) {
          res.status(404).send();
          return;
        }

        res.status(200).send(data);
      })
    },
    postQuestion: function(req, res) {
      let questionData = req.body;

      qanda.postQuestions(questionData, (err, data) => {
        if (err) {
          res.status(404).send();
          return;
        }

        res.status(201).send(data);
      })
    },
    updateQuestionHelpfulness: function(req, res) {
      let questionID = req.params.question_id;
      qanda.putQuestions(questionID, (err, data) => {
        if (err) {
          res.status(404).send();
          return;
        }

        res.status(201).send(data);
      })
    },
    postAnswer: function(req, res) {
      let answer = req.body;
      let questionID = req.params.question_id;
      qanda.addAnswer(answer, questionID, (err, data) => {
        if (err) {
          res.status(404).send();
          return;
        }
        console.log(data);
        res.status(201).send(data);
      })
    }
  },
  // CART CONTROLLERS
  cart: {
    getProductsInCart: function(req, res) {
      cart.getProductsFromCart((err, data) => {
        if (err) {
          res.status(404).send();
          return;
        }

        res.status(200).send(data);
      })
    },
    post: function(req, res) {

    }
  },
  interactions: {

  }
};