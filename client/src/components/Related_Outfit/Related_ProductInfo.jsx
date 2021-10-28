
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating.jsx';
var Related_ProductInfo = (props) => {
  console.log("props in Related_ProductInfo", props);
  return(
    <div className="Related_ProductInfo">
      <div>
        <img className="RelatedImage" src={props.product.image}/>
      </div>
      <div>
        {props.product.category}
      </div>
      <div>
        {props.product.name}
      </div>
      <div>
        {props.product.default_price}
      </div>
      <div>
        <Rating />
      </div>
    </div>
  )
}
Related_ProductInfo.propTypes = {
  product:PropTypes.object

}
export default Related_ProductInfo;