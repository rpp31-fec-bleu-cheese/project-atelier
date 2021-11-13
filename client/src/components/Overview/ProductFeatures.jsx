import React, { useState, useEffect, useLayoutEffect }  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


let ProductFeatures = ({productById}) => {

  return (
    <div className="ProductFeatures">
      {(Object.keys(productById).length) && <div className="ProductFeaturesList">
        {productById.features.map((productFeature, i) => (
          <div key={i}>✔ {productFeature.feature}: {productFeature.value}</div>
        ))}
      </div>}
    </div>
  );
}

ProductFeatures.propTypes = {
  productById: PropTypes.object,
  cam_token: PropTypes.object
}

export default ProductFeatures;