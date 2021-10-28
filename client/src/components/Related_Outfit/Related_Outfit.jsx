import React from 'React';
import Related_Products from './Related_Products.jsx';
import Outfit from './Outfit.jsx';
import data from '../../../data/Related_Outfit.js';
import PropTypes from 'prop-types';
class Related_Outfit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productId: 59558,
      productInfo:{},
      relatedProductIds:[],
      relatedProducts:[],
    };
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
    this.fetchrelatedProductIds(this.state.productId)
    .then((productIds) => {
      //console.log('related ProductIds in Related_Outfit Component:',productIds);

      var relatedProductIds = productIds.slice(0);
      this.setState({
        relatedProductIds: relatedProductIds
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
        relatedProducts: relatedProductsArray
      })
    })
    .catch((error) => {
      console.log('error in fetching productIds:',error);
    })

  }
  scroll(event, scrollOffset){

    var element = event;
    console.log('event:',event);
    if(event.target.className === 'PreviousProd') {
      element = event.target.nextSibling;
    }else{
      element = event.target.previousSibling;
    }
    console.log('element:',element);
    element.scrollLeft+=scrollOffset;
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
          <button className="PreviousProd"  onClick={(event)=>this.scroll(event,-50)}><i className="fa fa-angle-left"></i></button>
            <div id="Related_products">
              <Related_Products productId = {this.state.productId} relatedProducts = {this.state.relatedProducts}/>
            </div>
            <button className="NextProd" onClick={(event)=>this.scroll(event,+50)}><i className="fa fa-angle-right"></i></button>




          <button className="PreviousProd" onClick={(event)=>this.scroll(event,-50)}><i className="fa fa-angle-left"></i></button>

            <div id="Outfit">
            <button id="Plus">+</button>
            <Outfit productId = {this.state.productId} productInfo={this.state.productInfo}/>
            </div>
            <button className="NextProd" onClick={(event)=>this.scroll(event,+50)}><i className="fa fa-angle-right"></i></button>

      </div>
    )
  }
};

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