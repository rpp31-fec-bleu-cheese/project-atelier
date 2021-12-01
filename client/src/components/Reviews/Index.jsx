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
      loaded: false, // Lets the component know when to render everything
      currentProduct: '', // Only used to allow the component to update all info when the current product changes
      reviewsStarsFilter: {}, // Used to keep track of how the reviews are being filtered
      currentOverallRating: 0, // Determines current rating of product and passes it up to App component
      rateQuantity: 0, // Passed into ratings component to determine overall rating
      currentSort: 'Relevant',
      currentRatings: {},
      currentReviews: [],
      characteristics: {}
    };
  }

  componentDidMount() {
   this.setState({
     currentProduct: this.props.product_id
   })
  }

  componentDidUpdate(_, prevState) {
    if (prevState.currentProduct !== this.props.product_id) {
      $.ajax({
        url: '/reviews',
        method: 'GET',
        data: {
          product_id: this.props.product_id
        },
        success: reviews => {
          $.ajax({
            url: '/reviews/meta',
            method: 'GET',
            data: {
              product_id: this.props.product_id
            },
            success: metaData => {
              console.log(metaData)
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
              let ratingSum = 0,
                rateQuantity = 0,
                finalRating = 0,
                recommended = 0,
                ratingArray = Object.entries(ratings);

              if (reviews.results.length > 0) {
               /*
                * This block of code discovers the total amount of ratings, as well as the overall rating of the current product
                */
                for (let [key, value] of ratingArray) {
                  ratingSum += key * value;
                  rateQuantity += Number(value); //Number() is called here due to the values at each key being strings
                }
                finalRating = +(ratingSum / rateQuantity).toFixed(1);
              }
              this.props.updateRating(finalRating)
              this.setState({
                loaded: true,
                currentProduct: this.props.product_id,
                currentOverallRating: finalRating,
                rateQuantity,
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

  }

  changeSort(e) {
    $.ajax({
      url: '/reviews',
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
        <div id='RatingsReviews' onClick={() => this.props.trackUserClicks('Reviews', event)}>
          <Header />
          <RatingsContainer
            ratings={this.state.currentRatings}
            finalRating={this.state.currentOverallRating}
            reviews={this.state.currentReviews}
            onclick={this.addStarFilter.bind(this)}
            rateQuantity={this.state.rateQuantity}/>
          <BreakdownContainer characteristics={this.state.characteristics}/>
          <ReviewsContainer
            reviews={this.state.currentReviews}
            reviewsStarsFilter={this.state.reviewsStarsFilter}
            currentSort={this.state.currentSort}
            onchange={this.changeSort.bind(this)}
            product_id={this.props.product_id}
            characteristics={this.state.characteristics}/>
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
  product_id: PropTypes.number,
  updateRating: PropTypes.func,
  trackUserClicks: PropTypes.func
}

export default Reviews;