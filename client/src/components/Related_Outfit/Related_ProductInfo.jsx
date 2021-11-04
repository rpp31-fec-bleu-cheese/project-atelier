
import React ,{ useState }from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating.jsx';


var Related_ProductInfo = (props) => {
  console.log("props in Related_ProductInfo", props);
  /*var popup = false;
  var style = {"display": "none"};
  var clickhandler = function(){
    popup = !popup;
    console.log('star clicked')
    if(popup){
      style = {"display": "block"};
    }
  }*/
  var image = '';
  var imageFound = false;
  console.log('type of props.product.styles ', typeof (props.product.styles));
  if(Array.isArray(props.product.styles) && props.product.styles.length > 0) {
    for(var productStyle of props.product.styles) {
      if(productStyle[ "default?"] === true) {
        image = productStyle["photos"][0]["url"];
        imageFound = true;
      }
    }
    if(!imageFound) {
      image = props.product.styles[0]["photos"][0]["url"];
    }
  }


  if(props.component === 'Related') {
    return(
      <div className="Related_ProductInfo" onClick={(event) => {props.productClick(event, props.product.id)}}>

          <div className="Related" style={{ backgroundImage: `url(${image})`,backgroundSize: "cover"}}>

              <i id="Overlay_Star" onClick={(event) => props.starButtonClick(event, props.product.id)} className="far fa-star"></i>
          </div>

        <div>
          {props.product.category}
        </div>
        <div>
          {props.product.name}
        </div>
        <div>
          {props.product.default_price}
        </div>
        <div>
          <Rating />
        </div>
      </div>
    )
  } else {
    return (
      <div className="Related_ProductInfo" onClick={(event) => {props.productClick(event, props.product.id)}}>
        <div className="Outfit" style={{ backgroundImage: `url(${image})`,backgroundSize: "cover"}}>

              <i id="Overlay_Circle" onClick={(event) => {props.crossButtonClick(event, props.product.id)}} className="far fa-times-circle" ></i>
          </div>
        <div>
          {props.product.category}
        </div>
        <div>
          {props.product.name}
        </div>
        <div>
          {props.product.default_price}
        </div>
        <div>
          <Rating />
        </div>
      </div>
    )
  }

}
Related_ProductInfo.propTypes = {
  product:PropTypes.object,
  component:PropTypes.string,
  starButtonClick:PropTypes.func,
  productClick:PropTypes.func,
  crossButtonClick:PropTypes.func
}
export default Related_ProductInfo;

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
