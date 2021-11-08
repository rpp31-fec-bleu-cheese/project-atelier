import React from 'React';
import PropTypes from 'prop-types';

import Review from './Review/Review.jsx';
import MoreButton from './MoreButton.jsx';
import WriteButton from './WriteButton.jsx';

class ReviewsContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sortedReviews: [],
      visibleReviews: 2,
      sort: 'Relevant'
    };
  }

  componentDidMount() {
    this.changeFilterSort();
  }
  componentDidUpdate(prevProps) {
    let oldProps = Object.keys(prevProps.reviewsStarsFilter);
    let newProps = Object.keys(this.props.reviewsStarsFilter);

    if (oldProps.toString() !== newProps.toString()) this.changeFilterSort();
  }

  changeFilterSort() {
    if (this.props.reviews.length > 0) {
      let sorted = this.props.reviews
        .filter(review => {
          if (Object.keys(this.props.reviewsStarsFilter).length > 0) return review.rating in this.props.reviewsStarsFilter
          return true;
        })

      this.setState({
        sortedReviews: sorted
      })
    }
  }

  viewMoreReviews() {
    this.setState({
      visibleReviews: this.state.visibleReviews + 2
    })
  }

  render() {
    return (
      <div id='ReviewsContainer'>
        <div id='ReviewCount'>
          <span>{this.state.sortedReviews.length} reviews, sorted by </span>
          <select onChange={console.log}>
            <option value='Relevant' defaultValue>Relevant</option>
            <option value='Newest'>Newest</option>
            <option value='Helpful'>Helpful</option>
          </select>
        </div>
        {
          // If no reviews are present, the Reviews component will not render
          this.state.sortedReviews.length > 0 &&
          <div id='Reviews'>
            {
              this.state.sortedReviews
                .map((review, i) => <Review review={review} key={i}/>)
                .slice(0, this.state.visibleReviews)
            }
          </div>
        }
        <div id='ButtonContainer'>
          {
            // Once all reviews are present, the button will disappear from view.
            this.state.visibleReviews < this.state.sortedReviews.length &&
            <MoreButton onclick={this.viewMoreReviews.bind(this)}/>
          }
          <WriteButton />
        </div>
      </div>
    );
  }
}

ReviewsContainer.propTypes = {
  reviews: PropTypes.array.isRequired,
  reviewsStarsFilter: PropTypes.object.isRequired
};

export default ReviewsContainer;