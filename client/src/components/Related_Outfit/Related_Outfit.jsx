import React from 'React';
import RelatedOutfit_ProductInfo from './RelatedOutfit_ProductInfo.jsx';
import Comparison from './Comparison.jsx';
import PropTypes from 'prop-types';
import fetch from './fetchData';

class Related_Outfit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      productInfo:{},
      relatedProductIds:[],
      relatedProducts:[],
      outfitIds:this.props.outfitIds,
      outfits:[],
      productIdToCompare: 0,
      productToCompare:{},
      popup: false,
      popup_style:{"display":"none"}
    };
    this.starButtonClick = this.starButtonClick.bind(this);
    this.crossButtonClick = this.crossButtonClick.bind(this);
  }
   /**********************************/
  /*displays the comparison table popup*/
  /**********************************/
  starButtonClick(event, productId){
   var popup = !(this.state.popup);
    var style = {};
    if(popup) {
      style = {"display":"block"};
      var productToCompare = {};
      for(var product of this.state.relatedProducts) {

        if(product.id == productId) {
          productToCompare = product;
        }
      }

      this.setState({
        productIdToCompare: productId,
        productToCompare: productToCompare
      })

    } else {
      style = {"display":"none"};
      this.setState({
        productIdToCompare: 0,
        productToCompare: {}
      })
    }

    this.setState({
      popup: popup,
      popup_style:style
    });

  }
  /**********************************/
  /*removes the product from outfits*/
  /**********************************/
  crossButtonClick(event, productId) {
    this.props.changeInOutfit(event, productId, "Delete");
  }
  /**********************************/
  /*adds the product to outfits*/
  /**********************************/
  addToOutfit(){
    var outfitIds = this.props.outfitIds.slice(0);
    if(outfitIds.indexOf(this.props.productId) === -1) {
      this.props.changeInOutfit(event, this.props.productId, "Add");
    }
  }
  /*****************************************************************/
  /**fetch outfit product details for an array of outfit products**/
  /****************************************************************/
  fetchOufitInfo(outfitIds) {
    fetch.outfitProductDetails(outfitIds)
    .then((outfitProductDetails) => {

      this.setState({
        outfits: outfitProductDetails
      })
    })
    .catch((error) => {
      console.log((error) => {
        console.log("error ",error);
      })
    })
  }
  /***************************************************************************/
  /**fetch related product ids and their details for a particular productId**/
  /***************************************************************************/
  fetchRelatedInfo(productId) {
     /**fetch related product ids**/
     fetch.relatedProductIDs(this.props.productId)
     .then((relatedProductIds) => {

       var related = [];
       /**get unique product Ids**/
       relatedProductIds.forEach((productId, index) => {
          if(relatedProductIds.indexOf(productId) === index){
           related.push(productId);
          }
       })

       this.setState({
         relatedProductIds: related
       })
       return related;
     })
     .then((related) => {

       fetch.relatedProductDetails(related)
       .then((relatedProductDetails) => {

         this.setState({
           relatedProducts: relatedProductDetails
         })
       })
       .catch((error) => {
         console.log('error in fetching DETAILS', error);
       })
     })
     .catch((error) => {
       console.log('error:',error);
     })
  }

  /**********************************/
  /*fecth current product info*/
  /**********************************/
  fetchProductInfo(productId) {
    fetch.productInfo(productId)
    .then((result) => {

      this.setState({
        productInfo: result
      })
    })
    .catch((error) => {
      console.log('error:',error);
    });
  }
  /**********************************/
  /*fecth current product styles*/
  /**********************************/
  fetchProductStyles(productId) {
    fetch.productStyles(productId)
    .then((styles) => {

      var productInfo = this.state.productInfo;
      if(productInfo.styles === undefined) {
        productInfo.styles = styles.results;
      }

      this.setState({
        productInfo: productInfo
      })

    })
    .catch((error) => {
      console.log('error:',error);
    });
  }
  componentDidMount(){
    this.setState({
      productId:this.props.productId
    });
    this.fetchRelatedInfo(this.props.productId);
    this.fetchProductInfo(this.props.productId);
    this.fetchProductStyles(this.props.productId);
    this.fetchOufitInfo(this.props.outfitIds);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.productId !== this.props.productId) {
      this.fetchRelatedInfo(this.props.productId);
      this.fetchProductInfo(this.props.productId);
      this.fetchProductStyles(this.props.productId);
    }
    if(JSON.stringify(prevProps.outfitIds) !== JSON.stringify(this.props.outfitIds)) {
      this.fetchOufitInfo(this.props.outfitIds);
    }
  }
  /**************************************/
  /** Scrolling functionality          **/
  /***************************************/
  scroll(event, scrollOffset){
    var element = event;

    if(event.target.className === 'fa fa-angle-left') {
      element = event.target.parentElement.nextElementSibling;
    }else{
      element = event.target.parentElement.previousElementSibling;
    }

    element.scrollLeft= element.scrollLeft + scrollOffset;
  }

  render() {

   if(this.state.relatedProducts.length === 0) {
     return (
       <div id='Related_Outfit'>
         Loading...
       </div>
     )
   }

    return(

      <div id='Related_Outfit'>
        <h1 id="Related_Header">Related Products</h1>
          <button className="PreviousProd Related" ><i className="fa fa-angle-left" onClick={(event)=>this.scroll(event,-250)}></i></button>
            <div className="Related_products">
              {this.state.relatedProducts.map((product) => (
                <RelatedOutfit_ProductInfo key={product.id} product={product} component={'Related'} starButtonClick={this.starButtonClick} productClick={this.props.productClick}/>
              ))}

            </div>

            <button className="NextProd Related" ><i className="fa fa-angle-right" onClick={(event)=>this.scroll(event,+250)}></i></button>
            <h1 id="Outfit_Header">Your Outfit</h1>
          <button className="PreviousProd Outfit" ><i className="fa fa-angle-left" onClick={(event)=>this.scroll(event,-250)}></i></button>

            <div id="Outfit">
              <button id="Related_Plus" onClick={()=>this.addToOutfit()}><i className="fa fa-plus"></i><div>Add to Outfit</div></button>
              {this.state.outfits.map((product) => (
                <RelatedOutfit_ProductInfo key={product.id} product={product} component={'Outfit'} productClick={this.props.productClick} crossButtonClick={this.crossButtonClick}/>
              ))}
            </div>
            <button className="NextProd Outfit" ><i className="fa fa-angle-right" onClick={(event)=>this.scroll(event,+250)}></i></button>
          <div id="Comparison">
             <Comparison popup={this.state.popup} style={this.state.popup_style} currentProduct={this.state.productInfo} toCompare={this.state.productToCompare}/>
            </div>
      </div>
    )
  }
};
Related_Outfit.propTypes = {
  productId:PropTypes.number,
  productClick:PropTypes.func,
  outfitIds:PropTypes.array,
  changeInOutfit:PropTypes.func


}

export default Related_Outfit;



