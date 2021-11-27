import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Answer from '../../client/src/components/Q&A/questionComponents/Answer.jsx';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });


describe('<Answer />', () => {
  it ('renders Answer component', () => {
    const wrapper = mount(<Answer answer={{ photos: [] }}/>);
    expect(wrapper.find('.answer')).not.toBeUndefined();
  });
});