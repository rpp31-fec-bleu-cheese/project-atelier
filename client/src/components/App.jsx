import React from 'react';

import Header from './Header/Header.jsx';
import SiteMessage from './SiteMessage.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import Related_Outfit from './Related_Outfit/Related_Outfit.jsx';
import QandA from './Q&A/Q&A.jsx';
import Reviews from './Reviews/Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 59558
    };
    this.relatedOutfitProductClick = this.relatedOutfitProductClick.bind(this);

  }
  relatedOutfitProductClick(event, productId){
    console.log('event.target.id:',event.target.id)
  if(event.target.id !== 'Overlay_Star' && event.target.id !== 'Overlay_Circle') {
    console.log('inside click function productId:', productId);
    //update the productId

    this.setState({
      productId:productId
    });
   }

  }
  render() {
    return (
      <div id='App'>
        <Header />
        <SiteMessage />
        <ProductInfo />
        <Related_Outfit productId={this.state.productId} productClick={this.relatedOutfitProductClick}/>
        <QandA />
        <Reviews />
      </div>
    )
  }
};

export default App;