const axios = require('axios');
const config = require('../../config.js');

const server = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews'

const getReviews = (productID, sort, callback) => {
  let options = {
    url: server,
    method: 'get',
    headers: {
      'User-Agent': 'request',
      'Authorization': config.API_KEY
    },
    params: {
      product_id: productID,
      sort: sort,
      page: 1,
      count: 1000
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

const getMetaReviews = (productID, callback) => {
  let options = {
    url: server + '/meta',
    method: 'get',
    headers: {
      'User-Agent': 'request',
      'Authorization': config.API_KEY
    },
    params: {
      product_id: productID,
      page: 1,
      count: 1000
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

const postReviewData = (reviewData, callback) => {
  let options = {
    url: server,
    method: 'post',
    headers: {
      'User-Agent': 'request',
      'Authorization': config.API_KEY
    },
    params: reviewData
  };

  axios(options)
    .then((response) => {
      callback(null, response.data);
    })
    .catch((err) => {
      callback(err);
    })
};

const markReviewHelpful = (reviewID, callback) => {
  let options = {
    url: server + `/${reviewID}/helpful`,
    method: 'put',
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

const reportReview = (reviewID, callback) => {
  let options = {
    url: server + `/${reviewID}/report`,
    method: 'put',
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
}

// export
module.exports = {
  getReviews,
  getMetaReviews,
  postReviewData,
  markReviewHelpful,
  reportReview
}