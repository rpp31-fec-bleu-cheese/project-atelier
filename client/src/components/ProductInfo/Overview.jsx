import React from 'React';
import PropTypes from 'prop-types';

let Overview = ({products}) => {



    return (
      <div id='Overview'>
        <ProductInformation products={products} />
      </div>
    );

  };

  let ProductInformation = ({products}) => {

    return (
      <div className="ProductInformation">
        <div>
          Stars here (*****)
          <a href="">Read all reviews</a>
        </div>
        <div>
          {products[0].category} <br/>
          {products[0].name} <br/>
          {products[0].default_price}
        </div>

      </div>
    );
  }




Overview.propTypes = {
  products: PropTypes.array
}
ProductInformation.propTypes = {
  products: PropTypes.array
}

export default Overview;