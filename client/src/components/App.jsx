import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header.jsx';
import SiteMessage from './SiteMessage.jsx';
import Overview from './ProductInfo/Overview.jsx';
import Related_Outfit from './Related_Outfit/Related_Outfit.jsx';
import QandA from './Q&A/Q&A.jsx';
import Reviews from './Reviews/Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {
    return (
      <div id='App'>
        <Header />
        <SiteMessage />
        <Overview products={this.props.products} cam_token={this.props.cam_token} />
        <Related_Outfit />
        <QandA />
        <Reviews />
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