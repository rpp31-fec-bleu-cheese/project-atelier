import React from 'react';
import { shallow } from 'enzyme';
import QandA from '../../client/src/components/Q&A/Q&A.jsx';


describe('<QandA />', () => {
  it ('renders Q&A component', () => {
    const wrapper = shallow(<QandA />);
    expect(wrapper.find('#QandA')).not.toBeUndefined();
  });
});