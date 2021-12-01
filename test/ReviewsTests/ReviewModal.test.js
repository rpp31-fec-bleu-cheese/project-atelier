const React = require('react');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
const Enzyme = require('enzyme');
const { shallow, mount, render } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

import ReviewModal from '../../client/src/components/Reviews/ReviewsComponents/ReviewModal.jsx';

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
    }}

  let wrapper = shallow(<ReviewModal
    product_id={1016929}
    characteristics={characteristics}
    closeModal={()=>{}}/>);

  it('should render to the page', ()=> {
    expect(wrapper).toHaveLength(1);
  });
});
