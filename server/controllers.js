const products = require('./apiHelpers/productsAPI.js');
const cart = require('./apiHelpers/cartAPI.js');
const qanda = require('./apiHelpers/qandaAPI.js');
const reviews = require('./apiHelpers/reviewsAPI.js');
const interactions = require('./apiHelpers/interactionsAPI.js');
const Promise = require('bluebird');


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
    },
    //to fetch all the details including styles for an array of related/outfit products
    getDetailsForProducts: function(req, res) {

      let relatedProducts = JSON.parse(req.query.productIds);
      let fetchFunctions = [];
      var promisedFetchProduct = Promise.promisify(products.getProduct);
      var promisedFetchStyles = Promise.promisify(products.getProductStyle);
      var promisedFetchReviews = Promise.promisify(reviews.getReviews);
      for(var product of relatedProducts) {
        fetchFunctions.push(promisedFetchProduct(product));
      }
      Promise.all(fetchFunctions)
      .then((products) => {

        var fetchStyles = [];
        for(var product of products) {
          fetchStyles.push(promisedFetchStyles(product.id));
        }
        return Promise.all(fetchStyles)
        .then((productStylesArray)=>{

          /*for(var product of products) {

              for(var productStyle of productStylesArray) {

                if(productStyle.product_id == product.id){

                  product.styles = productStyle.results;
                }
              }

          }*/
          for(var i=0, j=0; i<products.length, j<productStylesArray.length; i++, j++) {
            if(products[i].id == productStylesArray[j].product_id) {

              products[i].styles = productStylesArray[j].results;

            }


          }
          //res.status(200).send(products);
          return products;

      })
    })
      .then((products)=>{
        var fetchReviews = [];
          for(product of products) {
            fetchReviews.push(promisedFetchReviews(product.id, undefined))
          }
          console.log('fetchReviews',fetchReviews);
          return Promise.all(fetchReviews)
          .then((productReviewsArray) => {
            console.log('productReviewsArray',productReviewsArray);
            var ratingArray = [];
            for(product of productReviewsArray) {
              var obj = {};
              obj.id = product.product;
              obj.rating = 0;
              if(product.results.length > 0) {
                for(var result of product.results) {
                  //console.log('result', result);
                  obj.rating += result.rating;
                }
                obj.rating = parseFloat(obj.rating/product.results.length);
                //console.log('obj.rating', obj.rating);
              }
              console.log('obj', obj);
              ratingArray.push(obj);
            }

            for(var i=0, j=0; i<products.length, j<ratingArray.length; i++, j++) {
              if(products[i].id == ratingArray[j].id) {

                products[i].rating = ratingArray[j].rating;

              }

            }
            console.log('related products with reviews', products);
            res.status(200).send(products);
          });


      })
      .catch((error) => {
        console.log(error);
        res.status(404).send();
      })
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
    },
    markHelpful: function(req, res) {
      let reviewID = req.body.review_id;

      reviews.markReviewHelpful(reviewID, (err, data) => {
        if (err) {
          res.status(400).send();
          return;
        }

        if (!req.cookies.markedHelpful || !(reviewID in JSON.parse(req.cookies.markedHelpful))) {
          reviews[reviewID] = reviewID;
          res.cookie('markedHelpful', JSON.stringify(reviews))
        }

        res.status(204).end();
      })
    },
    reportReview: function(req, res) {
      let reviewID = req.body.review_id;

      reviews.reportReview(reviewID, (err, data) => {
        if (err) {
          res.status(400).send();
          return;
        }

        res.status(204).end();
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
    updateAnswerHelpfulness: function(req, res) {
      let answerID = req.params.answer_id;
      qanda.putAnswers(answerID, (err, data) => {
        if (err) {
          res.status(404).send();
          return;
        }

        res.status(201).send(data);
      })
    },
    reportAnswer: function(req, res) {
      let answerID = req.params.answer_id;
      qanda.reportAnswers(answerID, (err, data) => {
        if (err) {
          res.status(404).send();
          return;
        }

        res.status(201).send(data);
      })
    },
    postAnswer: function(req, res) {
      let answer = req.body;
      console.log(req.body);
      let questionID = req.params.question_id;
      qanda.addAnswer(answer, questionID, (err, data) => {
        if (err) {
          res.status(404).send();
          return;
        }
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
    postProductToCart: function(req, res) {
      cart.addToCart(req.body.sku_id, (err, data) => {
        if (err) {
          res.status(404).send();
          return;
        }
        res.status(201).send(data);
      })
    }
  },
  // INTERACTIONS
  interactions: {
    postInteraction: function(req, res) {
      let interactionData = req.body
      interactions.postUserInteraction(interactionData, (err, data) => {
        if (err) {
          res.status(404).send();
          return;
        }
        res.status(201).send(data);
      })
    }
  },
  //added for Related Component
  cookies:{
    getCookies: function(req,res) {
      res.status(200).send(JSON.stringify(req.cookies));
    }
  }

};