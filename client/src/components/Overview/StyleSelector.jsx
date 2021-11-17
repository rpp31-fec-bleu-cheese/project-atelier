import React, { useState, useEffect, useLayoutEffect }  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


let StyleSelector = ({productStyles, indexes, handleStyleClick}) => {

  if (Object.keys(productStyles).length) {
    return (
      <div className="StyleSelector">
        <div className="SelectedStyle">
          <div className="SelectedStyleHeader">
          Style:
          </div>
          <div className="SelectedStyleDescription" data-testid="StyleDescription">
          {productStyles.results[indexes.style].name}
          </div>
        </div>
        <div className="StyleSelectorIcons">
          {productStyles.results.map((style, i) => (
                <div key={i} index={i} onClick={handleStyleClick} style={{background: `center / contain no-repeat url(${style.photos[0].thumbnail_url})`}} className="StyleIcon" data-testid={`StyleThumbnail ${i}`}></div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
    <div className="StyleSelector">
      <h3>Loading...</h3>
    </div>
    );
  }
}

StyleSelector.propTypes = {
  productStyles: PropTypes.object,
  handleStyleClick: PropTypes.func,
  indexes: PropTypes.object
}

export default StyleSelector;