

module.exports = {
  setCookies:function(req,res,next) {

    if(req.url.startsWith('/products/outfit/details')){

      res.cookie('outfitData', req.query.productIds);
    }

    next();
  }
}