

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jsdom-global/register';

import Related_Outfit from '../client/src/components/Related_Outfit/Related_Outfit.jsx';


Enzyme.configure({adapter:new Adapter()});


describe('Related_Outfit', () => {
  //test to see if Related_Outfit component is rendered
  it('should render correctly', () => {
    const component = Enzyme.mount(<Related_Outfit/>);
    expect(component).toMatchSnapshot();
  });

});