import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header.jsx';
import SiteMessage from './SiteMessage.jsx';
import Overview from './ProductInfo/Overview.jsx';
import Related_Outfit from './Related_Outfit/Related_Outfit.jsx';
import QandA from './Q&A/Q&A.jsx';
import axios from 'axios';
import RatingsReviews from './Reviews/Index.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 59558,
      outfitIds: [],
      currentProduct: 59554
    };
    this.relatedOutfitProductClick = this.relatedOutfitProductClick.bind(this);
    this.changeInOutfit = this.changeInOutfit.bind(this);
  }
   /****************************************************************************/
  /** clicking on outfit or raletd product makes that as the current product  **/
  /*****************************************************************************/
  relatedOutfitProductClick(event, productId){
    if(event.target.id !== 'Overlay_Star' && event.target.id !== 'Overlay_Circle') {

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

  componentDidMount(){
    var server = 'http://localhost:3000/cookies';
    var options = {
      method: "get",
      url:server
    }
    axios(options)
    .then((response) => {
      var outfitIds = JSON.parse(response.data.outfitData);
      this.setState({
        outfitIds:outfitIds
      })
    })
    .catch((error) => {
      console.log('error: in APP', error);
    });
  }




  render() {
    return (
      <div id='App'>
        <Header />
        <SiteMessage />
        <Overview products={this.props.products} cam_token={this.props.cam_token} />
        <Related_Outfit productId={this.state.productId} changeInOutfit={this.changeInOutfit} outfitIds={this.state.outfitIds} productClick={this.relatedOutfitProductClick}/>
        <QandA productID={this.state.productId}/>
        <RatingsReviews product_id={this.state.currentProduct}/>
      </div>
    )
  }
};

App.propTypes = {
  cam_token: PropTypes.string
}
App.propTypes = {
  products: PropTypes.array
}

export default App;