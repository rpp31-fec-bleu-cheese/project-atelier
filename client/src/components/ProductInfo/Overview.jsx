import React from 'React';
import PropTypes from 'prop-types';

let Overview = ({products}) => {



    return (
      <div id='Overview'>
        <ProductInformation products={products} />
        <StyleSelector products={products} />
        <AddToCart products={products} />
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

  let AddToCart = ({products}) => {
    return (
      <div className="AddToCart">
        <div className="SizeSelector">
          <form>
            <select className="SizeSelectorDropdown" value={`Select Size`} onChange={() => console.log('Size clicked!')}>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </form>
        </div>
        <div className="QuanititySelector">
          <form>
            <select className="QuanititySelectorDropdown" value="1" onChange={() => console.log('Quantity clicked!')}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </form>
        </div>
        <div className="AddToBag">
          <button className="AddToBagButton">Add to Bag</button>
        </div>
        <div className="AddToFavorite">
          <button className="AddToFavoriteButton">*</button>
        </div>
      </div>
    );
  }


AddToCart.propTypes = {
  products: PropTypes.array
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