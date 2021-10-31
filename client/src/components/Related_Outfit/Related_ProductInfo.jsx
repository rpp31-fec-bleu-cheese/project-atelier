
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
  if(props.component === 'Related') {
    return(
      <div className="Related_ProductInfo">

          <div className="Related" style={{ backgroundImage: `url(${props.product.image})`,backgroundSize: "cover"}}>

              <i id="Overlay_Star" onClick={props.starButtonClick} className="far fa-star"></i>
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
      <div className="Related_ProductInfo">
        <div className="Outfit" style={{ backgroundImage: `url(${props.product.image})`,backgroundSize: "cover"}}>

              <i id="Overlay_Circle"  className="far fa-times-circle"></i>
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
  starButtonClick:PropTypes.function
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
