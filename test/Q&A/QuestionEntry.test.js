import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import QuestionEntry from '../../client/src/components/Q&A/questionComponents/QuestionEntry.jsx';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });


describe('<QuestionEntry />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<QuestionEntry question={{ answers: [] }}/>);
  });

  test ('renders QuestionEntry component', () => {
    expect(wrapper.find('.question-entry')).not.toBeUndefined();
  });

  test ('it should open answer modal on "Add Answer" button click', () => {
    wrapper.find('.add-answer').simulate('click');
    expect(wrapper.state().showModal).toBe(true);
  });
});