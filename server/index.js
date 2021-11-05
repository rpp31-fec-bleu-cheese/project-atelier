const path = require('path');
const express = require('express');
const app = express();
const axios = require('axios').default;
//const router = require('./routes.js');
const controllers = require('./controllers.js');


app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
// app.use(router);

app.get('/products', controllers.products.getAllProducts);
app.get('/products/:product_id', controllers.products.getProductByID);
app.get('/products/:product_id/styles', controllers.products.getProductStyleByID);
app.get('/products/:product_id/related', controllers.products.getRelatedProductsByID);

app.get('/qa/questions/', controllers.questions_answers.getAllQuestions);

app.get('/reviews', controllers.reviews.getAllReviews);
app.get('/reviews/meta', controllers.reviews.getReviewsMeta);
app.post('/reviews', controllers.reviews.postReviews);

app.get('/cart', controllers.cart.getProductsInCart);

//utility routes for static media
app.get('/media', (req, res) => {

  let imageComingSoon = path.join(__dirname, '../stock_media/image-coming-soon.png')
  console.log(imageComingSoon)

  res.sendFile(imageComingSoon, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Image Coming Soon sent');
    }
  });
})

let port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});