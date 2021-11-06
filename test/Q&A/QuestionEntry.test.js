import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import QuestionEntry from '../../client/src/components/Q&A/questionComponents/QuestionEntry.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('<QuestionEntry />', () => {
  it ('renders QuestionEntry component', () => {
    const wrapper = mount(<QuestionEntry answers={{}}/>);
    expect(wrapper.find('.question-entry')).not.toBeUndefined();
  });
});