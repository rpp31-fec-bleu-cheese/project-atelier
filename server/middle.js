

module.exports = {
  setCookies:function(req,res,next) {
    console.log('req.url', req.url);
    if(req.url.startsWith('/products/outfit/details')){
      console.log('req.cookies in middleware:', req.cookies);
      res.cookie('outfitData', req.query.productIds,{ maxAge: 900000, httpOnly: true });
      //console.log('cookie in response:',res.getCookie());
    }

    next();
  }
}