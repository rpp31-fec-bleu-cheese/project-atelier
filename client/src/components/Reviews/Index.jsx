import React from 'react';
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
      loaded: false,
      reviewsStarsFilter: {},
      currentSort: 'Relevant',
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
              loaded: true,
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

  changeSort(e) {
    $.ajax({
      url: 'http://localhost:3000/reviews',
      method: 'GET',
      data: {
        product_id: this.props.product_id,
        sort: e.target.value
      },
      success: data => this.setState({
        currentSort: e.target.value,
        currentReviews: data.results
      }),
      error: (_, __, errString) => console.log(errString)
    })
  }

  addStarFilter(rating) {
    let state = {...this.state.reviewsStarsFilter};

    if (rating in state) { // Checks if rating filter exists within state, and removes it if it does
      delete state[rating];
      this.setState({
        reviewsStarsFilter: state
      })
    } else { // Adds it if it doesn't
      state[rating] = rating;
      this.setState({
        reviewsStarsFilter: state
      })
    }
  }

  render() {
    if (this.state.loaded) {
      return (
        <div id='RatingsReviews'>
          <Header />
          <RatingsContainer
            ratings={this.state.currentRatings}
            reviews={this.state.currentReviews}
            onclick={this.addStarFilter.bind(this)}
            updateRating={this.props.updateRating}/>
          <BreakdownContainer characteristics={this.state.characteristics}/>
          <ReviewsContainer
            reviews={this.state.currentReviews}
            reviewsStarsFilter={this.state.reviewsStarsFilter}
            currentSort={this.state.currentSort}
            onchange={this.changeSort.bind(this)}/>
        </div>
      )
    } else {
      return (
        <div id='RatingsReviews'>
          Loading...
        </div>
      )
    }

  }
};

Reviews.propTypes = {
  product_id: PropTypes.number.isRequired,
  updateRating: PropTypes.object.isRequired
}

export default Reviews;