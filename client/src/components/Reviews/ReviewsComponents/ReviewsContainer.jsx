import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

import Review from './Review.jsx';
import MoreButton from './MoreButton.jsx';
import WriteButton from './WriteButton.jsx';
import PhotoModal from './PhotoModal.jsx';
import ReviewModal from './ReviewModal.jsx'

class ReviewsContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      markedHelpful: {},
      modalPhoto: null,
      modalReview: false,
      sortedReviews: [],
      visibleReviews: 2,
    };
  }

  componentDidMount() {
    this.setState({
      sortedReviews: this.changeFilterSort(),
      markedHelpful: (document.cookie) ? JSON.parse(decodeURIComponent(document.cookie).split('=')[1]) : {}
    });
    console.log('DOCUMENT COOKIE:', document.cookie);
  }

  componentDidUpdate(prevProps) {
    let oldProps = Object.keys(prevProps.reviewsStarsFilter) + prevProps.currentSort + Object.entries(prevProps.reviews);
    let newProps = Object.keys(this.props.reviewsStarsFilter) + this.props.currentSort + Object.entries(this.props.reviews);

    if (oldProps !== newProps) {
      this.setState({
        sortedReviews: this.changeFilterSort(),
        markedHelpful: (document.cookie) ? JSON.parse(decodeURIComponent(document.cookie).split('=')[1]) : {}
      })
    };
  }

  updateListWhenReport(index) {
    let updatedReviews = this.state.sortedReviews.slice();
    updatedReviews.splice(index, 1);

    this.setState({
      sortedReviews: updatedReviews
    });
  }

  changeFilterSort() {
    if (this.props.reviews.length > 0) {
      let sorted = this.props.reviews
        .filter(review => {
          if (Object.keys(this.props.reviewsStarsFilter).length > 0) return review.rating in this.props.reviewsStarsFilter
          return true;
        });
      return sorted;
    } else {
      return [];
    }
  }

  viewMoreReviews() {
    this.setState({
      visibleReviews: this.state.visibleReviews + 2
    })
    $('html, body').animate({ scrollTop: $(document).height() }, 1000);
    $('#Reviews').animate({ scrollTop: $('#ReviewsSubcontainer').height() }, 1000);
  }

  loadPhotoModal(e) {
    if (e.target.id !== 'FullImage') this.setState({
      modalPhoto: (this.state.modalPhoto === null) ? e.target : null
    })
  }

  writeReview() {
    this.setState({
      modalReview: (!this.state.modalReview) ? true : false
    })
  }

  render() {
    return (
      <div id='ReviewsContainer'>
        <div id='ReviewCount'>
          <span>{this.state.sortedReviews.length} reviews, sorted by </span>
          <select onChange={this.props.onchange}>
            <option value='relevant' defaultValue>Relevant</option>
            <option value='newest'>Newest</option>
            <option value='helpful'>Helpful</option>
          </select>
          <div style={{fontSize: 'small', fontStyle: 'italic'}}>
            Reported reviews are not shown
          </div>
        </div>
        {
          // If no reviews are present, the Reviews component will not render
          this.state.sortedReviews.length > 0 &&
          <div id='Reviews'>
            <div id='ReviewsSubcontainer'>
              {
                this.state.sortedReviews
                  .map((review, i) => {
                    return <Review
                      review={review}
                      key={i}
                      index={i}
                      markedHelpful={this.state.markedHelpful}
                      onclick={this.loadPhotoModal.bind(this)}
                      report={this.updateListWhenReport.bind(this)}/>
                  })
                  .slice(0, this.state.visibleReviews)
              }
            </div>
          </div>
        }
        <div id='ButtonContainer'>
          {
            // Once all reviews are present, the button will disappear from view.
            this.state.visibleReviews < this.state.sortedReviews.length &&
              <MoreButton onclick={this.viewMoreReviews.bind(this)}/>
          }
          <WriteButton onclick={this.writeReview.bind(this)}/>
        </div>
        {
          this.state.modalPhoto !== null &&
            <PhotoModal photo={this.state.modalPhoto} onclick={this.loadPhotoModal.bind(this)}/>
        }
        {
          this.state.modalReview &&
            <ReviewModal onsubmit={this.writeReview.bind(this)}/>
        }
      </div>
    );
  }
}

ReviewsContainer.propTypes = {
  reviews: PropTypes.array.isRequired,
  reviewsStarsFilter: PropTypes.object.isRequired,
  onchange: PropTypes.func.isRequired,
  currentSort: PropTypes.string.isRequired
};

export default ReviewsContainer;