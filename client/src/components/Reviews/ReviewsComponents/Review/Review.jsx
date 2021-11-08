import React from 'React';
import PropTypes from 'prop-types';

const Review = props => {
  let dateOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  };

  let summary = props.review.summary;
  let body = props.review.body;
  if (summary.length > 60) {
    let newLine = summary.slice(60);
    summary = summary.slice(0, 61) + '...';
    body = `${newLine}\n${body}`;
  }

  return (
    <div className='Review'>
      <div className='ReviewStars'>
        <div className='Stars'>
          <div className='empty-stars'></div>
          <div className='full-stars' style={{width: ((props.review.rating / 5) * 100) + '%' }}></div>
        </div>
      </div>
      <div className='SubmittedBy'>{`${props.review.reviewer_name}, ${new Date(props.review.date).toLocaleString('en-us', dateOptions)}`}</div>
      <div className='Summary'>{summary}</div>
      <div className='Body'>{body}</div>
      {
        props.review.recommend === true &&
        <div className='ReviewRecommend'>✓ I recommend this product!</div>
      }
      {
        (props.review.response !== '' && props.review.response !== null) &&
        <div className='ResponseContainer'>
          <div className='Header'>Response:</div>
          <div className='Response'>{props.review.response}</div>
        </div>
      }
      <div className='HelpfulorReport'>
        Helpful?
      </div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.object.isRequired
};

export default Review;