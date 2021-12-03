

module.exports = {
  setCookies:function(req,res,next) {
    if(req.url.startsWith('/products/outfit/details')){
      res.cookie('outfitData', req.query.productIds,{ maxAge: 90000000, httpOnly: true });

    }

    next();
  }
}