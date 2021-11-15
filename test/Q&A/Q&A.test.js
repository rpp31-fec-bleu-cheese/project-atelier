import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import QandA from '../../client/src/components/Q&A/Q&A.jsx';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('<QandA />', () => {
  it ('renders Q&A component', () => {
    const wrapper = shallow(<QandA />);
    expect(wrapper.find('#QandA')).not.toBeUndefined();
  });
});