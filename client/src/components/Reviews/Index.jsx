import React from 'React';
import $ from 'jquery';
import PropTypes from 'prop-types';

import Header from './Header/Header.jsx';
import RatingsContainer from './RatingsComponents/RatingsContainer.jsx';
import BreakdownContainer from './BreakdownComponents/BreakdownContainer.jsx';
import ReviewsContainer from './ReviewsComponents/ReviewsContainer.jsx';

class Reviews extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentRatings: {},
      currentReviews: [],
      characteristics: {}
    };
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:3000/reviews',
      method: 'GET',
      data: {
        product_id: this.props.product_id
      },
      success: reviews => {
        $.ajax({
          url: 'http://localhost:3000/reviews/meta',
          method: 'GET',
          data: {
            product_id: this.props.product_id
          },
          success: metaData => {
            let ratings = {
              1: 0,
              2: 0,
              3: 0,
              4: 0,
              5: 0
            };
            let characteristics = {}
            for (let rate in metaData.ratings) {
              ratings[rate] = metaData.ratings[rate]
            }
            for (let char in metaData.characteristics) {
              characteristics[char] = metaData.characteristics[char]
            }
            this.setState({
              currentRatings: ratings,
              currentReviews: reviews.results,
              characteristics: characteristics
            })
          },
          error: (_, __, errString) => console.log(errString)
        })
      },
      error: (_, __, errString) => console.log(errString)
    })
  }

  render() {
    if (this.state.currentReviews.length > 0) {
      return (
        <div id='RatingsReviews'>
          <Header />
          <RatingsContainer ratings={this.state.currentRatings} reviews={this.state.currentReviews}/>
          <BreakdownContainer characteristics={this.state.characteristics}/>
          <ReviewsContainer />
        </div>
      )
    } else {
      return (
        <div id='RatingsReviews'>
          <Header />
          Loading...
        </div>
      )
    }

  }
};

Reviews.propTypes = {
  product_id: PropTypes.number.isRequired
}

export default Reviews;