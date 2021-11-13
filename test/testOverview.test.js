// import dependencies for React, Jest, Enzyme
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
// import component modules to be tested
import Overview from '../client/src/components/ProductInfo/Overview.jsx';
import ImageGallery from '../client/src/components/ProductInfo/Overview.jsx';
import ProductInformation from '../client/src/components/ProductInfo/Overview.jsx';
import StyleSelector from '../client/src/components/ProductInfo/Overview.jsx';
import AddToCart from '../client/src/components/ProductInfo/AddToCart.jsx';
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
  const outfitIds = [];
  const cam_token = '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';
  const productStyles = {
    results: [{"style_id": 365413,
    "name": "Forest Green & Black",
    "original_price": "140.00",
    "sale_price": null,
    "default?": true,
    "photos": [
        {
            "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        },
        {
            "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
        },
        {
            "thumbnail_url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
        },
        {
            "thumbnail_url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
        },
        {
            "thumbnail_url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        },
        {
            "thumbnail_url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        }
    ],
    "skus": {
        "2122777": {
            "quantity": 8,
            "size": "XS"
        },
        "2122778": {
            "quantity": 16,
            "size": "S"
        },
        "2122779": {
            "quantity": 17,
            "size": "M"
        },
        "2122780": {
            "quantity": 10,
            "size": "L"
        },
        "2122781": {
            "quantity": 15,
            "size": "XL"
        },
        "2122782": {
            "quantity": 4,
            "size": "XL"
        }
    }
    }]
    }
const changeInOutfit = (event, productId, todo) => {
  var outfitIds = this.state.outfitIds.slice(0)
  if(todo === "Add") {
    outfitIds.push(productId);
  } else if(todo === "Delete") {

    var index = outfitIds.indexOf(productId);
    outfitIds.splice(index,1);

  }
  this.setState({
    outfitIds: outfitIds
  })
}

  const indexes = {product: 0, photo: 0, style: 0};
  const wrapper = shallow(<AddToCart indexes={indexes} productStyles={productStyles} changeInOutfit={changeInOutfit} />);
  it('Renders an Add to Cart container', () => {
    expect(wrapper.find('.AddToCart')).not.toBeUndefined();
  })
  it('Renders sizes in Size Selector Dropdown container', () => {
    expect(wrapper.find('.SizeSelectorDropdown').children()).not.toBeUndefined();
  })
  // it('Allows items to be added to bag', () => {
  //   const tree = renderer.create(<AddToCart />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // })
  // it('Allows a size to be selected', () => {
  //   wrapper.find('.SizeOption').simulate('click');
  //   expect(handleSizeClick).to.have.property('callCount', 1);
  // })
  it('Renders six sizes', () => {
    let sizes = wrapper.find('.SizeOption');
    expect(sizes).to.have.lengthOf(6);
})
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