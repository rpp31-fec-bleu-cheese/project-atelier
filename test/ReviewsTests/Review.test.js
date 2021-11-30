const React = require('react');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
const Enzyme = require('enzyme');
const { shallow, mount, render } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

import Review from '../../client/src/components/Reviews/ReviewsComponents/Review.jsx';

describe('Review component', () => {
  let markedHelpful = {1016929: 1016929}
  let review = {
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
  };

  let wrapper = shallow(<Review
    review={review}
    markedHelpful={markedHelpful}
    index={0}
    report={()=>{}}
    onclick={()=>{}}/>);

  it('should render to the page', ()=> {
    expect(wrapper).toHaveLength(1);
  });
});
