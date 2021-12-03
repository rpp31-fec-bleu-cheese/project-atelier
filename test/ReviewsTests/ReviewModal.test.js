const React = require('react');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
const Enzyme = require('enzyme');
const { shallow, mount, render } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

import ReviewModal from '../../client/src/components/Reviews/ReviewsComponents/ReviewModal.jsx';
import ReviewsContainer from '../../client/src/components/Reviews/ReviewsComponents/ReviewsContainer.jsx';


describe('Review component', () => {
  let characteristics = {
    Comfort: {
      id: 199847,
      value: "3.3076923076923077"
    },
    Fit: {
      id: 199845,
      value: "2.8974358974358974"
    },
    Length: {
      id: 199846,
      value: "2.6666666666666667"
    },
    Quality: {
      id: 199848,
      value: "3.3589743589743590"
    }
  }

  class fakeContainer extends ReviewsContainer {
    constructor(props) {
      super(props)
      this.state.modalReview = true;
    }
  }

  let wrapper = shallow(
    <ReviewsContainer
      reviews={[
        {
          body: "It's a product that is here!",
          date: "2021-11-17T00:00:00.000Z",
          helpfulness: 9,
          photos: [],
          rating: 3,
          recommend: true,
          response: null,
          review_id: 1095021,
          reviewer_name: "mr_robot",
          summary: ""
        }
      ]}
      reviewsStarsFilter={{}}
      currentSort={'Relevant'}
      onchange={()=>{}}
      product_id={59554}
      characteristics={characteristics}/>
  );

  it('should render to the page', ()=> {
    expect(wrapper).toHaveLength(1);
  });
});
