import React from 'react';
import { shallow, mount } from 'enzyme';
import Answer from '../../client/src/components/Q&A/questionComponents/Answer.jsx';


describe('<Answer />', () => {
  it ('renders Answer component', () => {
    const wrapper = mount(<Answer answer={{}}/>);
    expect(wrapper.find('.answer')).not.toBeUndefined();
  });
});