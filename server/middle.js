

module.exports = {
  setCookies:function(req,res,next) {
    if(req.url.startsWith('/products/outfit/details')){
      res.cookie('outfitData', req.query.productIds,{ maxAge: 900000, httpOnly: true });
      //console.log('cookie in response:',res.getCookie());
    }

    next();
  }
}