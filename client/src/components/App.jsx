import React from 'react';
import Header from './Header/Header.jsx';
import SiteMessage from './SiteMessage.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import Related_Outfit from './Related_Outfit/Related_Outfit.jsx';
import QandA from './Q&A/Q&A.jsx';
import Reviews from './Reviews/Reviews.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 59558,
      outfitIds: []
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
        <ProductInfo />
        <Related_Outfit productId={this.state.productId} changeInOutfit={this.changeInOutfit} outfitIds={this.state.outfitIds} productClick={this.relatedOutfitProductClick}/>
        <QandA />
        <Reviews />
      </div>
    )
  }
};

export default App;