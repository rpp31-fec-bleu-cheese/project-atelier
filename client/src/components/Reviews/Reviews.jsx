import React from 'React';
import $ from 'jquery';
import PropTypes from 'prop-types';

import Header from './Header.jsx';
import RatingsContainer from './RatingsContainer.jsx';

class Reviews extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentRatings: {
        "1": "",
        "2": "1",
        "3": "1",
        "4": "2",
        "5": "1"
      },
      currentReviews: [
        {
            "review_id": 1016929,
            "rating": 3,
            "summary": "I'm enjoying wearing these shades",
            "recommend": true,
            "response": "",
            "body": "Comfortable and practical.",
            "date": "2019-04-14T00:00:00.000Z",
            "reviewer_name": "shortandsweeet",
            "helpfulness": 5,
            "photos": [
                {
                    "id": 1945562,
                    "url": "https://images.unsplash.com/photo-1560570803-7474c0f9af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
                },
                {
                    "id": 1945563,
                    "url": "https://images.unsplash.com/photo-1561693532-9ff59442a7db?ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
                },
                {
                    "id": 1945564,
                    "url": "https://images.unsplash.com/photo-1487349384428-12b47aca925e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                }
            ]
        },
        {
            "review_id": 1016927,
            "rating": 4,
            "summary": "I am liking these glasses",
            "recommend": true,
            "response": "Glad you're enjoying the product!",
            "body": "They are very dark. But that's good because I'm in very sunny spots",
            "date": "2019-06-23T00:00:00.000Z",
            "reviewer_name": "bigbrotherbenjamin",
            "helpfulness": 5,
            "photos": []
        },
        {
            "review_id": 1016928,
            "rating": 4,
            "summary": "They look good on me",
            "recommend": true,
            "response": "",
            "body": "I so stylish and just my aesthetic.",
            "date": "2019-03-12T00:00:00.000Z",
            "reviewer_name": "fashionperson",
            "helpfulness": 1,
            "photos": []
        },
        {
            "review_id": 1016931,
            "rating": 2,
            "summary": "This product was ok!",
            "recommend": false,
            "response": "",
            "body": "They're fine but I wouldn't buy again.",
            "date": "2019-05-23T00:00:00.000Z",
            "reviewer_name": "anyone",
            "helpfulness": 0,
            "photos": []
        },
        {
            "review_id": 1016930,
            "rating": 5,
            "summary": "I'm not a fan!",
            "recommend": false,
            "response": "Sorry to hear. Is there anything in particular you don't like?",
            "body": "I don't like them",
            "date": "2019-06-16T00:00:00.000Z",
            "reviewer_name": "negativity",
            "helpfulness": 0,
            "photos": []
        }
    ],
    recommended: {
      "false": "2",
      "true": "3"
    },
    characteristics: {
      "Quality": {
          "id": 199849,
          "value": "4.2000000000000000"
      }
  }
    };
  }

  render() {
    return(
      <div id='Reviews'>
        <Header />
        <RatingsContainer ratings={this.state.currentRatings} reviews={this.state.currentReviews}/>
      </div>
    )
  }
};

Reviews.propTypes = {
  product_id: PropTypes.number.isRequired
}

export default Reviews;