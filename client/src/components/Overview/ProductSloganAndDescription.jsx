import React, { useState, useEffect, useLayoutEffect }  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


let ProductSloganAndDescription = ({productById}) => {
  return (
    <div className="ProductSloganAndDescription">
        <div className="ProductSlogan">
          {productById.slogan}
        </div>
        <div className="ProductDescription">
          {productById.description}
        </div>
    </div>
  );
}

ProductSloganAndDescription.propTypes = {
  productById: PropTypes.object
}

export default ProductSloganAndDescription;