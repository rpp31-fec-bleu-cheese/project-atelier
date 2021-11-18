import React, { useState, useEffect, useLayoutEffect }  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


let ProductSloganAndDescription = ({productById}) => {
  return (
    <div className="ProductSloganAndDescription">
        <div className="ProductSlogan" data-testid="ProductSloganHeader">
          {productById.slogan}
        </div>
        <div className="ProductDescription" data-testid="ProductDescriptionBody">
          {productById.description}
        </div>
    </div>
  );
}

ProductSloganAndDescription.propTypes = {
  productById: PropTypes.object
}

export default ProductSloganAndDescription;