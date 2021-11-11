
import React from 'react';
import PropTypes from 'prop-types';

var Price = (props) => {
  if(props.salePrice === null || props.salePrice === undefined) {
    return (
      <div>
        ${props.defaultPrice}
      </div>
    )
  }

  return(
    <div>
      <span style={{color:'red'}}>${props.salePrice} </span>
      <span style={{textDecoration: 'line-through'}}>  ${props.defaultPrice}</span>
    </div>
  )
}

Price.propTypes = {
  salePrice:PropTypes.string,
  defaultPrice:PropTypes.string
}

export default Price;