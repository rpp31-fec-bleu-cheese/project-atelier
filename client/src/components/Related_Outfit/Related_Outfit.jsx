import React from 'React';
import Related_Products from './Related_Products.jsx';
import Outfit from './Outfit.jsx';

class Related_Outfit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productId: 59558
    };
  }

  render() {
    return(
      <div id='Related_Outfit'>

        <Related_Products productId = {this.state.productId}/>
        <Outfit productId = {this.state.productId}/>
      </div>
    )
  }
};

export default Related_Outfit;