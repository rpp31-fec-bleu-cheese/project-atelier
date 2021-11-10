
import React ,{ useState }from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating.jsx';


var RelatedOutfit_ProductInfo = (props) => {
  var image = '';
  var imageFound = false;
  var salePrice = null;

  if(Array.isArray(props.product.styles) && props.product.styles.length > 0) {
    for(var productStyle of props.product.styles) {
      if(productStyle[ "default?"] === true) {
        image = productStyle["photos"][0]["url"];
        imageFound = true;
        salePrice = productStyle["sale_price"];
      }
    }
    if(!imageFound) {
      image = props.product.styles[0]["photos"][0]["url"];
      salePrice =  props.product.styles["sale_price"];
    }
  }
  if(salePrice){
    console.log('THIS PRODUCT HAS A SALE PRICE:', salePrice);
  }

  if(props.component === 'Related') {
    return(
      <div className="RelatedOutfit_ProductInfo" onClick={(event) => {props.productClick(event, props.product.id)}}>

          <div className="Related" style={{ background: `center / contain no-repeat  url(${image}) `,backgroundSize:"cover"}}>

              <i id="Overlay_Star" onClick={(event) => props.starButtonClick(event, props.product.id)} className="far fa-star"></i>
          </div>

        <div className="RelatedInfo">
          {props.product.category}
        </div>
        <div className="RelatedInfo">
          <em>{props.product.name}</em>
        </div>
        <div className="RelatedInfo">
         ${props.product.default_price}
        </div>
        <div className="OutfitInfo">
          <Rating />
        </div>
      </div>
    )
  } else {
    return (
      <div className="RelatedOutfit_ProductInfo" onClick={(event) => {props.productClick(event, props.product.id)}}>

        <div className="Outfit" style={{ background: `center / contain no-repeat  url(${image}) `,backgroundSize:"cover"}}>

              <i id="Overlay_Circle" onClick={(event) => {props.crossButtonClick(event, props.product.id)}} className="far fa-times-circle" ></i>
          </div>

        <div className="OutfitInfo">
          {props.product.category}
        </div>
        <div className="OutfitInfo name" >
          {props.product.name}
        </div>
        <div className="OutfitInfo">
          ${props.product.default_price}
        </div>
        <div className="OutfitInfo">
          <Rating />
        </div>
      </div>
    )
  }

}
RelatedOutfit_ProductInfo.propTypes = {
  product:PropTypes.object,
  component:PropTypes.string,
  starButtonClick:PropTypes.func,
  productClick:PropTypes.func,
  crossButtonClick:PropTypes.func
}
export default RelatedOutfit_ProductInfo;

// <img  className="RelatedImage" src={props.product.image}/>

/*
<div>
          <img className="RelatedImage" src={props.product.image}/>
        </div>
        <div>
          <i onClick={clickhandler} className="far fa-times-circle"></i>
        </div>*/

        //style={{"background-image":`url (${props.product.image})`}}

        /*{popup
          content={<>
             <b>Design your Popup</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button>Test button</button>
            </>}
            />}*/
