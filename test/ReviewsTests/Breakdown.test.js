const React = require('react');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');
const Enzyme = require('enzyme');
const { shallow, mount, render } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

import Breakdown from '../../client/src/components/Reviews/BreakdownComponents/Breakdown.jsx';

describe('Ratings and Reviews component', () => {
  let char = [
    "Quality",
    {
      "id": 199849,
      "value": "4.2000000000000000"
    }
  ];
  let wrapper = shallow(<Breakdown char={char}/>);

  it('should render to the page', ()=> {
    expect(wrapper).toHaveLength(1);
  });
});
