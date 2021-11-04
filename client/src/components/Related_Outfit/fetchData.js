

var axios = require('axios');

var relatedProductIDs = function(productId) {
  console.log('inside the function relatedProductIDs');
  return new Promise((resolve, reject) => {
    var server = 'http://localhost:3000/products/'+productId+'/related';
    var options = {
      method:"get",
      url:server
    }
    axios(options)
    .then((response) => {
      var relatedIds = response.data
      //console.log('response:',response.data);
      resolve(relatedIds);
    })
    .catch((error) => {
      reject(error)
    });
  });

}
var relatedProductDetails = function(relatedIds) {
  console.log('fetching related Product Details');
  return new Promise((resolve, reject) => {
    var server = 'http://localhost:3000/products/related/details';
    var options = {
      method:"get",
      url:server,
      params: {
        productIds: JSON.stringify(relatedIds)
      }

    }
    axios(options)
    .then((response) => {

      console.log('response:',response.data);
      resolve(response.data);
    })
    .catch((error) => {
      console.log('error:',error)
      reject(error)
    });
  });
}
var outfitProductDetails = function(outfitIds) {
  console.log('fetching outfit Product Details');
  return new Promise((resolve, reject) => {
    var server = 'http://localhost:3000/products/outfit/details';
    var options = {
      method:"get",
      url:server,
      params: {
        productIds: JSON.stringify(outfitIds)
      }

    }
    axios(options)
    .then((response) => {

      console.log('response:',response.data);
      resolve(response.data);
    })
    .catch((error) => {
      console.log('error:',error)
      reject(error)
    });
  });
}
var productInfo = function(productId) {
  var server = 'http://localhost:3000/products/'+productId;
  return new Promise((resolve, reject) => {
  var options = {
    method:"get",
    url: server
  }
    axios(options)
    .then((response) => {
      var productInfo = response.data
      //console.log('response:',response.data);
      resolve(productInfo);
    })
    .catch((error) => {
      reject(error)
    });
  });
}
var productStyles = function(productId) {
  var server = 'http://localhost:3000/products/'+productId+'/styles';
  return new Promise((resolve, reject) => {
  var options = {
    method:"get",
    url: server
  }
    axios(options)
    .then((response) => {
      var styles = response.data
      //console.log('response:',response.data);
      resolve(styles);
    })
    .catch((error) => {
      reject(error)
    });
  });
}
module.exports = {
  relatedProductIDs:relatedProductIDs,
  relatedProductDetails:relatedProductDetails,
  productInfo: productInfo,
  productStyles:productStyles

}