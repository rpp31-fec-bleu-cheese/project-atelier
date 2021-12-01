import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header.jsx';
import SiteMessage from './SiteMessage.jsx';
import Overview from './Overview/Overview.jsx';
import Related_Outfit from './Related_Outfit/Related_Outfit.jsx';
import QandA from './Q&A/Q&A.jsx';
import axios from 'axios';
import RatingsReviews from './Reviews/Index.jsx';
import config from '../../../config.js';
import { useEffect } from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      productId: 59553,
      outfitIds: [],
      currentProductDetails: {},
      currentProductStyles: {}
    };
    this.relatedOutfitProductClick = this.relatedOutfitProductClick.bind(this);
    this.changeInOutfit = this.changeInOutfit.bind(this);
    this.updateDetailsAndStyles = this.updateDetailsAndStyles.bind(this);
  }
   /****************************************************************************/
  /** clicking on outfit or raletd product makes that as the current product  **/
  /*****************************************************************************/
  relatedOutfitProductClick(event, productId){
    console.log(event.target.parentElement.parentElement.id);
    if(event.target.parentElement.parentElement.id !== 'Overlay_Star' && event.target.parentElement.parentElement.id  !== 'Overlay_Circle') {

      this.setState({
        productId:productId
      });
    }
  }
  /****************************************************************************/
             /** adding/deleting  product from outfits **/
  /*****************************************************************************/
  changeInOutfit(event, productId, todo) {
    var outfitIds = this.state.outfitIds.slice(0)
    if(todo === "Add") {
      outfitIds.push(productId);
    } else if(todo === "Delete") {

      var index = outfitIds.indexOf(productId);
      outfitIds.splice(index,1);

    }
    this.setState({
      outfitIds: outfitIds
    })
  }

  updateRating(rating) {
    this.setState({
      rating: rating
    })
  }

  updateDetailsAndStyles(productDetails, productStyles) {
   this.setState({
     currentProductDetails: productDetails,
     currentProductStyles: productStyles
   })
  }

  componentDidMount(){

    //alert(JSON.parse(document.cookie.split('=')[1]));
    /*var outfitIds = [];
    if(document.cookie) {
      outfitIds=JSON.parse(document.cookie.split('=')[1]);
    }

    //alert(Array.isArray(outfits));
    this.setState({
      outfitIds:outfitIds
    })*/
    axios({
      method: 'get',
      url: '/cookies'
    })
    .then((response) => {
      var outfitIds = JSON.parse(response.data.outfitData);
      //console.log('OUTFITIDS ')
      this.setState({
        outfitIds:outfitIds
      })
    })
    .catch((error) => {
      console.log('error: in APP', error);
    });
    // API calls for product ID and styles
    let productIdOptions = {
      url: `/products/${this.state.productId}`,
      method: 'get'
    };
    let productStylesOptions = {
      url: `products/${this.state.productId}/styles`,
      method: 'get'
    };
    axios(productIdOptions)
      .then(response => {
        this.setState({ currentProductDetails: response.data });
        axios(productStylesOptions)
        .then(response => {
          this.setState({ currentProductStyles: response.data });
            })
          })
          .catch(error => {
            console.log(error)});
  }


  trackUserInteractions(widget, event) {
    let date = new Date();
    let timeOfInteraction = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    let interactionToLog = {
      element: event.target.outerHTML,
      widget: widget,
      time: timeOfInteraction
    };
    //console.log(interactionToLog)

    axios.post('/interactions', {
      element: event.target.outerHTML,
      widget: widget,
      time: timeOfInteraction
    })
      .then((reponse) => {
        console.log('Interaction Successfully Logged!');
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div id='App'>
        <Header />
        <SiteMessage />

        <Overview
          updateDetailsAndStyles={this.updateDetailsAndStyles}
          productById={this.state.currentProductDetails}
          productStyles={this.state.currentProductStyles}
          cam_token={this.props.cam_token}
          productId={this.state.productId}
          changeInOutfit={this.changeInOutfit}
          outfitIds={this.state.outfitIds}
          starRating={this.state.rating}
          trackUserClicks={this.trackUserInteractions}/>
        <Related_Outfit
          productId={this.state.productId}
          changeInOutfit={this.changeInOutfit}
          outfitIds={this.state.outfitIds}
          productClick={this.relatedOutfitProductClick}
          trackUserClicks={this.trackUserInteractions}
          currentProductDetails ={this.state.currentProductDetails}
          currentProductStyles={this.state.currentProductStyles}
          rating = {this.state.rating}/>
        <QandA
          productId={this.state.productId}
          currentProduct={this.state.currentProductDetails.name}
          trackUserClicks={this.trackUserInteractions}/>
        <RatingsReviews
          product_id={this.state.productId}
          updateRating={this.updateRating.bind(this)}
          trackUserClicks={this.trackUserInteractions}/>
      </div>
    )
  }
};

App.propTypes = {
  cam_token: PropTypes.string
}
App.propTypes = {
  products: PropTypes.array,
  startingProductId: PropTypes.number
}

export default App;