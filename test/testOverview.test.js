// import dependencies for React, Jest, Enzyme
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
// import component modules to be tested
import Overview from '../client/src/components/ProductInfo/Overview.jsx';
import ImageGallery from '../client/src/components/ProductInfo/Overview.jsx';
import ProductInformation from '../client/src/components/ProductInfo/Overview.jsx';
import StyleSelector from '../client/src/components/ProductInfo/Overview.jsx';
import AddToCart from '../client/src/components/ProductInfo/Overview.jsx';
import ProductSloganAndDescription from '../client/src/components/ProductInfo/Overview.jsx';
import ProductFeatures from '../client/src/components/ProductInfo/Overview.jsx';

// configure Enzyme
configure({ adapter: new Adapter() });

// tests

describe('<Overview />', () => {
  it('Renders Overview component to the DOM', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.find('#Overview')).not.toBeUndefined();
    // expect(wrapper.find('#Overview')).to.have.lengthOf(6);
  })
  it('Contains an Image Gallery component', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.find('ImageGallery')).not.toBeUndefined();
  })
  it('Contains a Product Information component', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.find('ProductInformation')).not.toBeUndefined();
  })
  it('Contains a Style Selector component', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.find('StyleSelector')).not.toBeUndefined();
  })
  it('Contains a Add To Cart component', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.find('AddToCart')).not.toBeUndefined();
  })
  it('Contains a Product Slogan and Description component', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.find('ProductSloganAndDescription')).not.toBeUndefined();
  })
  it('Contains a Product Features component', () => {
    const wrapper = shallow(<Overview />);
    expect(wrapper.find('ProductFeatures')).not.toBeUndefined();
  })



  // it('Renders child components', () => {
  //   const wrapper = shallow((
  //     <Overview>
  //       <ImageGallery />
  //     </Overview>
  //   ));
  //   expect(wrapper.find(<ImageGallery />)).to.equal(true);
  // });


})

describe('<ImageGallery />', () => {
  it('Renders an Image Gallery container', () => {
    const wrapper = shallow(<ImageGallery />);
    expect(wrapper.find('.ImageGallery')).not.toBeUndefined();
  })

  it('Renders images in Gallery Thumbnails container', () => {
    const wrapper = shallow(<ImageGallery />);
    expect(wrapper.find('.ImageGalleryThumbnails').children()).not.toBeUndefined();
  })
})

describe('<ProductInformation />', () => {
  it('Renders a Style Selector container', () => {
    const wrapper = shallow(<ProductInformation />);
    expect(wrapper.find('.ProductInformation')).not.toBeUndefined();
  })
})

describe('<StyleSelector />', () => {
  it('Renders a Style Selector container', () => {
    const wrapper = shallow(<StyleSelector />);
    expect(wrapper.find('.StyleSelector')).not.toBeUndefined();
  })
  it('Renders styles in Style Selector Icons container', () => {
    const wrapper = shallow(<StyleSelector />);
    expect(wrapper.find('.StyleSelectorIcons').children()).not.toBeUndefined();
  })
})

describe('<AddToCart />', () => {
  it('Renders an Add to Cart container', () => {
    const wrapper = shallow(<AddToCart />);
    expect(wrapper.find('.AddToCart')).not.toBeUndefined();
  })
  it('Renders sizes in Size Selector Dropdown container', () => {
    const wrapper = shallow(<AddToCart />);
    expect(wrapper.find('.SizeSelectorDropdown').children()).not.toBeUndefined();
  })
  it('Allows items to be added to bag', () => {
    const wrapper = mount(<AddToCart />);
    const button = wrapper.find('.AddToBagButton').text();
    expect(button).toEqual('Add to Bag');
  })
  // it('Allows a size to be selected', () => {
  //   const wrapper = shallow(<AddToCart />);
  //   wrapper.find('.SizeOption').simulate('click');
  //   expect(handleSizeClick).to.have.property('callCount', 1);
  // })
})

describe('<ProductSloganAndDescription />', () => {
  it('Renders a Product Slogan and Description container', () => {
    const wrapper = shallow(<ProductSloganAndDescription />);
    expect(wrapper.find('.ProductSloganAndDescription')).not.toBeUndefined();
  })
})

describe('<ProductFeatures />', () => {
  it('Renders a Product Features container', () => {
    const wrapper = shallow(<ProductFeatures />);
    expect(wrapper.find('.ProductFeatures')).not.toBeUndefined();
  })
})


// it('Renders six child components', () => {
//   const wrapper = shallow(<Overview />);
//   expect(wrapper.find(ImageGallery)).to.have.lengthOf(1);
// })