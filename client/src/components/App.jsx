import React from 'react';

import Header from './Header/Header.jsx';
import SiteMessage from './SiteMessage.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import Related_Outfit from './Related_Outfit/Related_Outfit.jsx';
import QandA from './Q&A/Q&A.jsx';
import Reviews from './Reviews/Reviews.jsx';
import data from '../../data/Related_Outfit.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 59558,
      outfitIds: data.outfitIds
    };
    this.relatedOutfitProductClick = this.relatedOutfitProductClick.bind(this);
    this.changeInOutfit = this.changeInOutfit.bind(this);

  }
  relatedOutfitProductClick(event, productId){

  if(event.target.id !== 'Overlay_Star' && event.target.id !== 'Overlay_Circle') {
    console.log('inside click function productId:', productId);

    //update the productId

    this.setState({
      productId:productId
    });
   }

  }
  changeInOutfit(event, productId, todo) {
    console.log('inside changeInOutfit in APP component')
    console.log('productId',productId);
    var outfitIds = this.state.outfitIds.slice(0)
    if(todo === "Add") {
      outfitIds.push(productId);
    } else if(todo === "Delete") {
      console.log("deleting the product from outfits");
      var index = outfitIds.indexOf(productId);
      outfitIds.splice(index,1);

    }
    this.setState({
      outfitIds: outfitIds
    })
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