
import RelatedOutfit_ProductInfo from './RelatedOutfit_ProductInfo.jsx';
import Comparison from './Comparison.jsx';
import PropTypes from 'prop-types';
import fetch from './fetchData';
import React from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

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
      popup_style:{"display":"none"},
      scrollLeftRelated:0,
      scrollLeftOutfit:0,
      defaultStyle:{"display":"none"},
      maxScrollLeftRelated:0,
      maxScrollLeftOutfit:0
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
      //console.log("productId in starButton Click", productId);
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
  fetchOufitInfo(outfitIds, prevOutfitIds) {
    //localStorage.clear();
    //document.cookie="outfitIds="+JSON.stringify(outfitIds);
    /*localStorage.removeItem('outfits:'+prevOutfitIds.toString());
    const keyForStorage = 'outfits:'+outfitIds.toString();
    let outfitDetailsInString = localStorage.getItem(keyForStorage);
    //console.log('key for storage', keyForStorage);
    //console.log('outfits in localStorage',  JSON.parse(outfitDetailsInString));
    if(outfitDetailsInString) {
      var outfitProducts = JSON.parse(outfitDetailsInString);
      var maxScrollLeftOutfit = (outfits.length-3) * 215;
      this.setState({
        outfits: outfitProducts,
        scrollLeftRelated:0,
        scrollLeftOutfit:0,
        maxScrollLeftOutfit:maxScrollLeftOutfit
      })
    }else {*/
      //const keyForStorage = 'outfits:'+outfitIds.toString();
      //console.log('OUTFIT IDS', outfitIds);
      //console.log('going to fetch data');
      var maxScrollLeftOutfit = (outfitIds.length-3) * 215;
        fetch.outfitProductDetails(outfitIds)
      .then((outfitProductDetails) => {
        //localStorage.setItem(keyForStorage, JSON.stringify(outfitProductDetails));

        this.setState({
          outfits: outfitProductDetails,
          scrollLeftRelated:0,
          scrollLeftOutfit:0,
          maxScrollLeftOutfit:maxScrollLeftOutfit
        })
      })
      .catch((error) => {
        console.log((error) => {
          console.log("error ",error);
        })
      })
    //}

  }
  /***************************************************************************/
  /**fetch related product ids and their details for a particular productId**/
  /***************************************************************************/
  fetchRelatedInfo(productId) {
     /**fetch related product ids**/

     const cachedRelatedDetails = localStorage.getItem(productId);
     if(cachedRelatedDetails && productId === 59553) {

        this.setState({
          relatedProducts:JSON.parse(cachedRelatedDetails)
        })
     } else {
      fetch.relatedProductIDs(this.props.productId)
      .then((relatedProductIds) => {

        var related = [];
        /**get unique product Ids**/
        relatedProductIds.forEach((productId, index) => {
           if(relatedProductIds.indexOf(productId) === index){
            related.push(productId);
           }
        })
        var maxScrollLeftRelated = (relatedProductIds.length - 4) * 215;
        this.setState({
          relatedProductIds: related,
          scrollLeftRelated:0,
          scrollLeftOutfit:0,
          maxScrollLeftRelated:maxScrollLeftRelated
        })
        return related;
      })
      .then((related) => {

        fetch.relatedProductDetails(related)
        .then((relatedProductDetails) => {
          if(productId === 59553) {
            localStorage.setItem(productId, JSON.stringify(relatedProductDetails));
          }

          this.setState({
            relatedProducts: relatedProductDetails
          });
         // alert('Data Added into cache!')
          /*if ('caches' in window) {
            console.log("inside caches ");
           // Opening given cache and putting our data into it
           caches.open('MyCache').then((cache) => {
             cache.put("http://localhost:3000/products/related/details", productInfo);
             alert('Data Added into cache!')
           });
         }*/


        })
        .catch((error) => {
          console.log('error in fetching DETAILS', error);
        })
      })
      .catch((error) => {
        console.log('error:',error);
      })
     }

  }

 /**********************************/
  /*fecth current product info*/
  /**********************************/
  /*fetchProductInfo(productId) {
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
  /*fetchProductStyles(productId) {
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
  }*/
  componentDidMount(){
    var productInfo = {};



    productInfo = this.props.currentProductDetails;
    productInfo.styles = this.props.currentProductStyles;
    this.setState({
      productId:this.props.productId,
      productInfo: productInfo
    });

    this.fetchRelatedInfo(this.props.productId);
    //this.fetchProductInfo(this.props.productId);
    //this.fetchProductStyles(this.props.productId);



  }

  componentDidUpdate(prevProps) {
    if (prevProps.productId !== this.props.productId) {
      this.fetchRelatedInfo(this.props.productId);
      //this.fetchProductInfo(this.props.productId);
      //this.fetchProductStyles(this.props.productId);
    }
    if(JSON.stringify(prevProps.currentProductDetails) !== JSON.stringify(this.props.currentProductDetails)
    || JSON.stringify(prevProps.currentProductStyles) !== JSON.stringify(this.props.currentProductStyles)) {
      //console.log('prevProps.currentProductStyles',prevProps.currentProductStyles);

      //console.log('this.props.currentProductStyles',this.props.currentProductStyles);
      var productInfo = {};
      productInfo = this.props.currentProductDetails;
      productInfo.styles = this.props.currentProductStyles;

      this.setState({
        productId:this.props.productId,
        productInfo: productInfo
       });
    }
    if(JSON.stringify(prevProps.outfitIds) !== JSON.stringify(this.props.outfitIds)) {
      this.fetchOufitInfo(this.props.outfitIds, prevProps.outfitIds);
    }
  }
  /**************************************/
  /** Scrolling functionality          **/
  /***************************************/
  scroll(event, scrollOffset){
    var element = event;
    var className = event.target.parentElement.parentElement.className;
    console.log(event.target.parentElement.parentElement.className);
    if(event.target.parentElement.parentElement.className.startsWith("PreviousProd")){

      element = event.target.parentElement.parentElement.nextElementSibling;
    }else{
      element = event.target.parentElement.parentElement.previousElementSibling;
    }

    element.scrollLeft= element.scrollLeft + scrollOffset;

    if((className==="NextProd Related") || (className==="PreviousProd Related")){

      this.setState ({
        scrollLeftRelated:element.scrollLeft
      })

    }else if((className==="NextProd Outfit") || ((className==="PreviousProd Outfit"))){

      this.setState ({
        scrollLeftOutfit:element.scrollLeft
      })
    }

  }

  render() {
   var scrollLeftRelatedStyle = this.state.defaultStyle;
   var scrollRightRelatedStyle = this.state.defaultStyle;
   var scrollLeftOutfitStyle = this.state.defaultStyle;
   var scrollRightOutfitStyle = this.state.defaultStyle;

   if(this.state.relatedProducts.length > 4) {
    scrollRightRelatedStyle = {"visibility": "visible"}
   }
   if(this.state.outfits.length > 3) {
    scrollRightOutfitStyle = {"visibility": "visible"}
   }
   if(this.state.scrollLeftRelated > 0) {
    scrollLeftRelatedStyle = {"visibility": "visible"}
   }
   if(this.state.scrollLeftOutfit > 0) {
    scrollLeftOutfitStyle = {"visibility": "visible"}
   }
   if(this.state.scrollLeftOutfit > this.state.maxScrollLeftOutfit) {
    scrollRightOutfitStyle = this.state.defaultStyle;
   }
   if(this.state.scrollLeftRelated > this.state.maxScrollLeftRelated) {
    scrollRightRelatedStyle = this.state.defaultStyle;
   }
   //console.log("scrollRightRelatedStyle",scrollRightRelatedStyle);
   if(this.state.relatedProducts.length === 0 && this.state.outfits.length === 0) {
     return (
       <div id='Related_Outfit'>
         Loading...
       </div>
     )
   }

    return(

      <div data-testid="Related_Outfit" id='Related_Outfit' onClick={() => this.props.trackUserClicks('Related Outfits', event)}>
        <h1 id="Related_Header">Related Products</h1>
          <button className="PreviousProd Related"  style={scrollLeftRelatedStyle}><FontAwesomeIcon id="leftScrollForRelated" icon = {faAngleLeft}  onClick={(event)=>this.scroll(event,-250)}/></button>
            <div data-testid="Related" className="Related_products">
              {this.state.relatedProducts.map((product) => (
                <RelatedOutfit_ProductInfo key={product.id} currentProductId={this.state.productId} rating={this.props.rating} product={product} component={'Related'} starButtonClick={this.starButtonClick} productClick={this.props.productClick}/>
              ))}

            </div>

            <button className="NextProd Related" style = {scrollRightRelatedStyle}><FontAwesomeIcon icon = {faAngleRight} onClick={(event)=>this.scroll(event,+250)}/></button>
            <h1 id="Outfit_Header">Your Outfit</h1>
          <button className="PreviousProd Outfit" style={scrollLeftOutfitStyle}><FontAwesomeIcon icon = {faAngleLeft} onClick={(event)=>this.scroll(event,-250)}/></button>

            <div data-testid="Outfit" id="Outfit">
              <button id="Related_Plus" className="rel" onClick={()=>this.addToOutfit()}><FontAwesomeIcon icon = {faPlus} id="PlusIcon"/><div>Add to Outfit</div></button>
              {this.state.outfits.map((product) => (
                <RelatedOutfit_ProductInfo key={product.id} currentProductId={this.state.productId} rating={this.props.rating} product={product} component={'Outfit'} productClick={this.props.productClick} crossButtonClick={this.crossButtonClick}/>
              ))}
            </div>
            <button className="NextProd Outfit" style={scrollRightOutfitStyle}><FontAwesomeIcon icon = {faAngleRight} onClick={(event)=>this.scroll(event,+250)}/></button>
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
  changeInOutfit:PropTypes.func,
  currentProductDetails:PropTypes.object,
  currentProductStyles:PropTypes.object,
  trackUserClicks: PropTypes.func,
  rating: PropTypes.number


}

export default Related_Outfit;



