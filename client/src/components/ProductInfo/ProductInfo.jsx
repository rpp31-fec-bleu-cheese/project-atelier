import React from 'React';
import PropTypes from 'prop-types';

let Overview = ({products}) => {



    return (
      <div id='Overview'>
        Product Info Here
      </div>
    );

  };


  Overview.propTypes = {
  products: PropTypes.array
}

export default Overview;