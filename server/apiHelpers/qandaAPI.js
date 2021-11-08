const axios = require('axios');
const config = require('../../config.js');

const server = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions'

const getQuestions = (productID, callback) => {
  let options = {
    url: server,
    method: 'get',
    headers: {
      'User-Agent': 'request',
      'Authorization': config.API_KEY
    },
    params: {
      product_id: productID,
      page: 1,
      count: 100
    }
  };

  axios(options)
    .then((response) => {
      callback(null, response.data);
    })
    .catch((err) => {
      callback(err);
      console.log(err);
    })
};

const getAnswersByID = (questionID, callback) => {
  let options = {
    url: server + questionID + '/answers',
    method: 'get',
    headers: {
      'User-Agent': 'request',
      'Authorization': config.API_KEY
    },
    params: {
      page: 1,
      count: 5
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

const postQuestions = (questionData, callback) => {
  let options = {
    url: server,
    method: 'post',
    headers: {
      'User-Agent': 'request',
      'Authorization': config.API_KEY
    },
    data: questionData
  };

  axios(options)
    .then((response) => {
      console.log(response);
      callback(null, response.data);
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    })
};


const putQuestions = (questionID, callback) => {
  let options = {
    url: server + '/' + questionID + '/helpful',
    method: 'put',
    headers: {
      'User-Agent': 'request',
      'Authorization': config.API_KEY
    }
  };

  axios(options)
    .then((response) => {
      callback(null, response.data)
    })
    .catch((err) => {
      console.log(err);
    })
}

const addAnswer = (answer, questionID, callback) => {
  let options = {
    url: server + '/' + questionID + '/answers',
    method: 'post',
    headers: {
      'User-Agent': 'request',
      'Authorization': config.API_KEY
    },
    data: answer
  };

  axios(options)
    .then((response) => {
      callback(null, response.data)
    })
    .catch((err) => {
      console.log(err);
    })
}

module.exports = {
  getQuestions,
  getAnswersByID,
  postQuestions,
  putQuestions,
  addAnswer
};