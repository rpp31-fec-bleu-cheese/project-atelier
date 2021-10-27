import React from 'React';
import PropTypes from 'prop-types';

let Overview = ({products}) => {



    return (
      <div id='Overview'>
        <ProductInformation products={products} />
        <StyleSelector products={products} />
      </div>
    );

  };

  let ProductInformation = ({products}) => {
    return (
      <div className="ProductInformation">
        <div className="StarsAndReviews">
          <div>
          Stars here (*****)
          </div>
          <div>
          <a href="">Read all (#) reviews</a>
          </div>
        </div>
        <div className="ProductCategory">
          {products[0].category}
        </div>
        <div className="ProductName">
          {products[0].name}
        </div>
        <div>
          {`$${products[0].default_price}`}
        </div>
      </div>
    );
  }

  let StyleSelector = ({products}) => {
    return (
      <div className="StyleSelector">
        <div className="SelectedStyle">
          <div className="SelectedStyleHeader">
          Style:
          </div>
          <div className="SelectedStyleDescription">
          Selected Style
          </div>
        </div>
        <div className="StyleSelectorIcons">
          <div className="StyleIcon">Test</div>
          <div className="StyleIcon">Test</div>
          <div className="StyleIcon">Test</div>
          <div className="StyleIcon">Test</div>
          <div className="StyleIcon">Test</div>
          <div className="StyleIcon">Test</div>
          <div className="StyleIcon">Test</div>
          <div className="StyleIcon">Test</div>
        </div>
      </div>
    );
  }


StyleSelector.propTypes = {
  products: PropTypes.array
}

Overview.propTypes = {
  products: PropTypes.array
}
ProductInformation.propTypes = {
  products: PropTypes.array
}

export default Overview;