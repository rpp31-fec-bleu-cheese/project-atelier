import React from 'react';
import { shallow, mount } from 'enzyme';
import FooterButtons from '../../client/src/components/Q&A/FooterButtons.jsx';


describe('<FooterButtons />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<FooterButtons />);
  });

  test ('it should render FooterButtons component', () => {
    expect(wrapper.find('.footer-buttons')).not.toBeUndefined();
  });

  test ('it should open question modal on "ADD A QUESTION" button click', () => {
    wrapper.find('.add-question-button').simulate('click');
    expect(wrapper.state().showModal).toBe(true);
  });

});