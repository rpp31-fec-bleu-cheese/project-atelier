import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import sinon from 'sinon';
import React from 'react';
import jest from 'jest';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import {screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom';

import Price from '../../client/src/components/Related_Outfit/Price.jsx';

Enzyme.configure({adapter:new Adapter()});

describe('Price', () => {
  let component;
  beforeEach(() => {
    component = mount(<Price salePrice={'140.00'} defaultPrice={'200.00'}/>);
  });
  it('Component Price is rendered',(done)=>{
    expect(component).not.toBeUndefined();
    done();
  })
  it('see if the salePrice displayed',(done)=>{
    expect(component.find('#RelatedOutfit_SalePrice')).not.toBeUndefined();
    done();
  })
});


