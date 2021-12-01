import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

import PhotoModal from './PhotoModal.jsx';

class Review extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      markedHelpful: false,
      reported: false
    }
  }

  componentDidMount() {
    if (this.props.review.review_id in this.props.markedHelpful) this.setState({markedHelpful: true})
  }

  markHelpful(e) {
    $.ajax({
      url: '/reviews/helpful',
      method: 'PUT',
      data: JSON.stringify({
        review_id: this.props.review.review_id
      }),
      contentType: 'application/json',
      success: data => {
        this.setState({
          markedHelpful: true
        })
        e.target.innerHTML = `Yes(${this.props.review.helpfulness + 1})`;
      },
      error: (_, __, errString) => console.log(errString)
    })
  }

  reportReview() {
    $.ajax({
      url: '/reviews/:review_id/report',
      method: 'PUT',
      data: JSON.stringify({
        review_id: this.props.review.review_id
      }),
      contentType: 'application/json',
      success: data => {
        this.props.report(this.props.index)
        alert('Report has been received.  You will no longer see this review.')
      },
      error: (_, __, errString) => console.log(errString)
    })
  }

  render() {
    let dateOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    };
    // This block of code handles truncating the summary if it goes beyond 60 characters
    // The summary will have '...' appended to the end and the remainder of the summary will be prepended
    // to the body of the review
    let summary = this.props.review.summary;
    let body = this.props.review.body;
    let newLine;
    if (summary.length > 60) {
      newLine = (
        <div className='extendedSummary'>{summary.slice(60)}</div>
      );
      summary = summary.slice(0, 60) + '...';
    }
    return (
      <div className='Review' id={this.props.review.review_id}>
        <div className='ReviewStars'>
          <div className='Stars'>
            <div className='empty-stars'></div>
            <div className='full-stars' style={{width: ((this.props.review.rating / 5) * 100) + '%' }}></div>
          </div>
        </div>
        <div className='SubmittedBy'>{`${this.props.review.reviewer_name}, ${new Date(this.props.review.date).toLocaleString('en-us', dateOptions)}`}</div>
        <div className='Summary'>{summary}</div>
        {
          summary.length > 60 &&
            newLine
        }
        <div className='Body'>{body}</div>
        {
          this.props.review.photos.length > 0 &&
            <div className='PhotoContainer'>
              {this.props.review.photos.map((photo, i) => {
                return (
                  <img className='Thumbnail' id={photo.id} src={photo.url} onClick={this.props.onclick} key={i}></img>
                )
              })}
            </div>
        }
        {
          this.props.review.recommend === true &&
          <div className='ReviewRecommend'><mark>✓ I recommend this product!</mark></div>
        }
        {
          (this.props.review.response !== '' && this.props.review.response !== null) &&
          <div className='ResponseContainer'>
            <div className='Header'>Response:</div>
            <div className='Response'>{this.props.review.response}</div>
          </div>
        }
        <div className='HelpfulorReport'>
          <span>Helpful? </span>
          <span className='VoteHelpful'
            onClick={(!this.state.markedHelpful) ? this.markHelpful.bind(this) : () => {}}>
            {`Yes(${this.props.review.helpfulness})`}
          </span>
          <span> | </span>
          <span className='ReportReview' onClick={this.reportReview.bind(this)}>Report</span>
        </div>
      </div>
    );
  }
};

Review.propTypes = {
  review: PropTypes.object.isRequired,
  onclick: PropTypes.func.isRequired,
  report: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  markedHelpful: PropTypes.object.isRequired
};

export default Review;