import React from 'React';
import Related_ProductInfo from './Related_ProductInfo.jsx';
import Comparison from './Comparison.jsx';
import data from '../../../data/Related_Outfit.js';
import PropTypes from 'prop-types';
import $ from 'jquery';
class Related_Outfit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productId: 0,
      productInfo:{},
      relatedProductIds:[],
      relatedProducts:[],
      outfit:[],
      popup: false,
      popup_style:{"display":"none"}
    };
    this.starButtonClick = this.starButtonClick.bind(this);
  }
  starButtonClick(event){
    console.log('event on click');
    var popup = !(this.state.popup);
    var style = {};
    if(popup) {
      style = {"display":"block"}
    }else {
      style = {"display":"none"}
    }

    this.setState({
      popup: popup,
      popup_style:style
    });

  }
  fetchrelatedProductIds(productId){
    return new Promise((resolve,reject) => {
      var productIds = [];
      //get unique product Ids
      data.relatedProductIds.forEach((productId, index) => {
        if(data.relatedProductIds.indexOf(productId) === index) {
          productIds.push(productId);
        }
      })
      resolve(productIds);
    });
  }
  fetchRelatedProductInfo(relatedProductIds) {
    //console.log('relatedProductIds', relatedProductIds);
    //console.log('data.products',data.products);
    return new Promise((resolve, reject) => {
      var relatedProducts = [];
      relatedProductIds.forEach((productId) => {
         for(var product of data.productDetails) {

           if(product.id === productId) {
            relatedProducts.push(product);
           }
         }
      });
      resolve(relatedProducts);
    })
  }
  componentDidMount(){
    this.setState({
      productId:this.props.productId
    })
    this.fetchrelatedProductIds(this.state.productId)
    .then((productIds) => {
      //console.log('related ProductIds in Related_Outfit Component:',productIds);

      var relatedProductIds = productIds.slice(0);

      this.setState({

        relatedProductIds: relatedProductIds,

      });
      return relatedProductIds;
    })
    .then((productIds) => {
      //console.log('related ProductIds in Related_Outfit Component:',productIds);
      return this.fetchRelatedProductInfo(productIds);

    })
    .then((relatedProductsArray) => {
      //console.log('related products in the component:', relatedProducts);
      this.setState({
        relatedProducts: relatedProductsArray,
        outfit: relatedProductsArray
      })
    })
    .catch((error) => {
      console.log('error in fetching productIds:',error);
    })

  }
  scroll(event, scrollOffset){

    var element = event;
    var element1 = $('div#Related_Outfit div.Related_products');
    console.log('element1:', element1)
    console.log('event:',event);
    if(event.target.className === 'PreviousProd Related' || event.target.className ==='PreviousProd Outfit') {
      element = event.target.nextElementSibling;
    }else{
      element = event.target.previousElementSibling;
    }
    console.log('element:',element);
    console.log('scrollleft before:',element.scrollLeft);
    element.scrollLeft= element.scrollLeft + scrollOffset;
    console.log('scrollleft:',element.scrollLeft);
  }
  render() {
   console.log("this.state", this.state.relatedProducts);
   if(this.state.relatedProducts.length === 0) {
     return (
       <div id='Related_Outfit'>
         Related Products and your outfit here
       </div>
     )
   }

    return(

      <div id='Related_Outfit'>
        <h1 id="Related_Header">Related Products</h1>
          <button className="PreviousProd Related"  onClick={(event)=>this.scroll(event,-250)}><i className="fa fa-angle-left"></i></button>
            <div className="Related_products">
              {this.state.relatedProducts.map((product) => (
                <Related_ProductInfo key={product.id} product={product} component={'Related'} starButtonClick={this.starButtonClick}/>
              ))}

            </div>

            <button className="NextProd Related" onClick={(event)=>this.scroll(event,+250)}><i className="fa fa-angle-right"></i></button>



          <h1 id="Outfit_Header">Your Outfit</h1>
          <button className="PreviousProd Outfit" onClick={(event)=>this.scroll(event,-250)}><i className="fa fa-angle-left"></i></button>

            <div id="Outfit">
              <button id="Related_Plus"><i className="fa fa-plus"></i><div>Add to Outfit</div></button>
              {this.state.outfit.map((product) => (
                <Related_ProductInfo key={product.id} product={product} component={'Outfit'}/>
              ))}
            </div>
            <button className="NextProd Outfit" onClick={(event)=>this.scroll(event,+250)}><i className="fa fa-angle-right"></i></button>
          <div id="Comparison">
             <Comparison popup={this.state.popup} style={this.state.popup_style} />
            </div>
      </div>
    )
  }
};
Related_Outfit.propTypes = {
  productId:PropTypes.number

}

export default Related_Outfit;

/*<div className="related">
          <div>
            <button>Prev</button>
          </div>
          <Related_Products productId = {this.state.productId} relatedProducts = {this.state.relatedProducts}/>
          <div>
            <button>Next</button>
          </div>
        </div>*/


        /*<div className="outfit">
           <Outfit productId = {this.state.productId} productInfo={this.state.productInfo}/>
        </div>*/
       // <Outfit productId = {this.state.productId} productInfo={this.state.productInfo}/>