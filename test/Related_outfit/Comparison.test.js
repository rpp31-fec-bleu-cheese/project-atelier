
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
//import 'jsdom-global/register';
import sinon from 'sinon';
import React from 'react';
import jest from 'jest';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Comparison from '../../client/src/components/Related_Outfit/Comparison.jsx';


Enzyme.configure({adapter:new Adapter()});

describe('Comparison', () => {
  //test to see if Comparison component is rendered
  it('Comparison should render correctly', () => {
      const wrapper = mount(<Comparison/>);
      expect(wrapper.find('#ComparingTable')).not.toBeUndefined();
  });

});


