

module.exports = {
  setCookies:function(req,res,next) {
    console.log("inside middle setCookies")
    console.log('req.cookie', req.cookies);
    if(req.url.startsWith('/products/outfit/details')){
      console.log('req.outfitIds:', req.url);
      res.cookie('outfitData', req.query.productIds);
    }
    console.log('res.cookie', res.cookie);
    //res.cookie('related_ids', JSON.stringify(req.query.productIds));
    next();
  }
}