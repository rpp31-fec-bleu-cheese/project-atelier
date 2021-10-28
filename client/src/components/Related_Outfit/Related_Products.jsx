import React from 'react' ;
import Related_ProductInfo from './Related_ProductInfo.jsx';
import PropTypes from 'prop-types';
//console.log('data:', data);
var Related_Products = (props) => {
  console.log('props in related products', props.relatedProducts);
  var rating  = 5.0;


  return(
    <div id="Related_products">

      {props.relatedProducts.map((product) => (
        <Related_ProductInfo key={product.id} product={product}/>
      ))}
    </div>
  )
}

Related_Products.propTypes = {
  relatedProducts: PropTypes.array
}
export default Related_Products;