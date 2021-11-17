import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Photo from '../../client/src/components/Q&A/questionComponents/Photo.jsx';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('<Photo />', () => {
  test('it should render Photo component', () => {
    const wrapper = shallow(<Photo />);
    expect(wrapper.find('.photo')).not.toBeUndefined();
  });

 });