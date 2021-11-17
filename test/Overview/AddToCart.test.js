// import dependencies for React, Jest, Enzyme
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
// import renderer from 'react-test-renderer';
// import components to be tested
import AddToCart from '../../client/src/components/Overview/AddToCart.jsx';
import Overview from '../../client/src/components/Overview/Overview.jsx';
// configure Enzyme
// configure({ adapter: new Adapter() });

// const outfitIds = [];
//   const cam_token = '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';
//   const productStyles = {
//     results: [{"style_id": 365413,
//     "name": "Forest Green & Black",
//     "original_price": "140.00",
//     "sale_price": null,
//     "default?": true,
//     "photos": [
//         {
//             "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//             "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
//         },
//         {
//             "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//             "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
//         },
//         {
//             "thumbnail_url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//             "url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
//         },
//         {
//             "thumbnail_url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
//             "url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
//         },
//         {
//             "thumbnail_url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//             "url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
//         },
//         {
//             "thumbnail_url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//             "url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
//         }
//     ],
//     "skus": {
//         "2122777": {
//             "quantity": 8,
//             "size": "XS"
//         },
//         "2122778": {
//             "quantity": 16,
//             "size": "S"
//         },
//         "2122779": {
//             "quantity": 17,
//             "size": "M"
//         },
//         "2122780": {
//             "quantity": 10,
//             "size": "L"
//         },
//         "2122781": {
//             "quantity": 15,
//             "size": "XL"
//         },
//         "2122782": {
//             "quantity": 4,
//             "size": "XL"
//         }
//     }
//     }]
//     }
// const changeInOutfit = (event, productId, todo) => {
//   var outfitIds = this.state.outfitIds.slice(0)
//   if(todo === "Add") {
//     outfitIds.push(productId);
//   } else if(todo === "Delete") {

//     var index = outfitIds.indexOf(productId);
//     outfitIds.splice(index,1);

//   }
//   this.setState({
//     outfitIds: outfitIds
//   })
// }

// let handleSizeClick = (event) => {
//   event.persist();
//   setOutOfStock(false);
//   let selectedSize = event.target.value;
//   console.log('SIZE IN SIZE CLICK:', selectedSize);
//   for (var i = 0; i < skusArray.length; i++) {
//     if (skusArray[i].size === selectedSize) {
//       let availableQuantity = skusArray[i].quantity;
//       let quantityArray = [];
//       if (!availableQuantity) {
//         setOutOfStock(true);
//       } else if (availableQuantity <= 15) {
//         for (let q = 1; q <= availableQuantity; q++) {
//           quantityArray.push(q);
//         }
//       } else {
//         for (let q = 1; q <= 15; q++) {
//           quantityArray.push(q);
//         }
//       }
//       // console.log('AVAIL QUANTITY:', availableQuantity);
//       // console.log('QTY ARRAY:', quantityArray);
//       // setDefaultSizeAndQty({qty: quantityArray, size: selectedSize});
//       setCurrentSize(selectedSize);
//       setQtyInStock(quantityArray);
//     }
//   }

//   event.preventDefault();
// }

// let handleAddToBag = () => {
//   console.log('Added to bag!')
//   // get sku
//   let productSkuForBag;
//   for (let key in currentSkus) {
//     if (currentSize === currentSkus[key].size) {
//       productSkuForBag = key;
//       console.log('Product Sku:', productSkuForBag);
//     }
//   }
//   let optionsForCart = {
//     url: '/cart',
//     method: 'post',
//     headers: {'Content-Type': 'application/json',
//     'Authorization': cam_token.cam_token},
//     data: {sku_id: productSkuForBag}
//   };
//   axios(optionsForCart)
//     .then(response => {
//       console.log('Response from Cart:', response.data);
//     })
//       .catch(error => {
//         console.log(error);
//       });
// }
// const indexes = {product: 0, photo: 0, style: 0};

// component tests


describe('<AddToCart />', () => {
  let productStyles = {
    "product_id": "59553",
    "results": [
        {
            "style_id": 365413,
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
        }
    ]
  }
  it('', () => {
    let selectedSize = 'M';
    let wrapper = mount(<Overview productStyles={productStyles} />);
    let sizeSelector = wrapper.find('.SizeSelectorDropdown');
    console.log('******************');
    console.log(wrapper.debug());
    console.log('******************');
    sizeSelector.simulate('change', {
      target: {className: 'SizeOption', value: selectedSize}
    })
  })

  it('Renders sizes in Size Selector Dropdown container', () => {
    let indexes = {product: 0, style: 0, photo: 0};
    let wrapper = shallow(<AddToCart indexes={indexes}/>);
    let bagButton = wrapper.find('.AddToBagButton').text();
    expect(bagButton).toBe('Add To Bag');
  })
})


// it('Renders an Add to Cart container', () => {
//   let wrapper = shallow(<AddToCart indexes={indexes}/>);
//   expect(wrapper.find('.AddToCart')).not.toBeUndefined();
// })
// it('Renders sizes in Size Selector Dropdown container', () => {
//   let wrapper = shallow(<AddToCart />);
//   let bagButton = wrapper.find('.AddToBagButton').text();
//   expect(bagButton).toBe('Add To Bag');
// })
  // it('Allows a size to be selected', () => {
  //   wrapper.find('.AddToBagButton').simulate('click');
  //   expect(handleAddToBag).toHaveBeenCalled();
  // })
  // it('Allows items to be added to bag', () => {
  //   const tree = renderer.create(<AddToCart />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // })
  // it('Renders six sizes', () => {
  //   let sizes = wrapper.find('.SizeOption');
  //   expect(sizes).to.have.lengthOf(6);
  // })