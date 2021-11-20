// import dependencies for React, Jest, Enzyme
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
// import module(s) under test
import AddToCart from '../../client/src/components/Overview/AddToCart.jsx';
import handleAddToBag from '../../client/src/components/Overview/AddToCart.jsx';

// fixtures
const testIndexes = { product: 0, style: 0, photo: 0 };
let testOutfitIds = [];
let testChangeInOutfit = (event, productId, todo) => {
    // var outfitIds = this.state.outfitIds.slice(0)
    // if(todo === "Add") {
    //   outfitIds.push(productId);
    // } else if(todo === "Delete") {

    //   var index = outfitIds.indexOf(productId);
    //   outfitIds.splice(index,1);

    // }
    // this.setState({
    //   outfitIds: outfitIds
    // })
  }
const testProductStyles = {
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
        },
        {
            "style_id": 365414,
            "name": "Desert Brown & Tan",
            "original_price": "140.00",
            "sale_price": null,
            "default?": false,
            "photos": [
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                },
                {
                    "thumbnail_url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                    "url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80"
                }
            ],
            "skus": {
                "2122783": {
                    "quantity": 8,
                    "size": "XS"
                },
                "2122784": {
                    "quantity": 16,
                    "size": "S"
                },
                "2122785": {
                    "quantity": 17,
                    "size": "M"
                },
                "2122786": {
                    "quantity": 10,
                    "size": "L"
                },
                "2122787": {
                    "quantity": 15,
                    "size": "XL"
                },
                "2122788": {
                    "quantity": 6,
                    "size": "XXL"
                }
            }
        },
        {
          "style_id": 365415,
          "name": "Ocean Blue & Grey",
          "original_price": "140.00",
          "sale_price": "100.00",
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
              }
          ],
          "skus": {
              "2122789": {
                  "quantity": 8,
                  "size": "XS"
              },
              "2122790": {
                  "quantity": 16,
                  "size": "S"
              },
              "2122791": {
                  "quantity": 17,
                  "size": "M"
              },
              "2122792": {
                  "quantity": 10,
                  "size": "L"
              },
              "2122793": {
                  "quantity": 15,
                  "size": "XL"
              },
              "2122794": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      }
    ]
  }

// test suite
describe('<AddToCart />', () => {
    let component;
    beforeEach(() => {
      component = render(<AddToCart productStyles={testProductStyles} indexes={testIndexes} changeInOutfit={testChangeInOutfit} outfitIds={testOutfitIds}/>);
    })
    test('Renders without crashing', () => {
      expect(component).toBeDefined();
    })
    test('Accepts an object of product styles', () => {
      expect(typeof testProductStyles).toBe('object');
    })
    test('Accepts a function to handle left arrow index change', () => {
      expect(typeof testChangeInOutfit).toBe('function');
    })
    test('Accepts an object of indexes to keep track of photos in gallery', () => {
      expect(testIndexes).toBeDefined();
    })
    test('Renders a size selector dropdown list', () => {
      let sizeDropdown = component.getByTestId('SizeSelectorDropdown');
      expect(sizeDropdown).toBeInTheDocument();
    })
    test('Renders all sizes available', () => {
      let size;
      let sizesAvailable = [];
      let skusAvailable = testProductStyles.results[testIndexes.style].skus;
      for (let item in skusAvailable) {
        sizesAvailable.push(skusAvailable[item]);
      }
      for (let i = 0; i < sizesAvailable.length; i++) {
        size = component.getByTestId(`SizeOption ${i}`);
        expect(size).toBeInTheDocument();
      }
    })
    test('Renders a quantity selector dropdown list', () => {
      let qtyDropdown = component.getByTestId('QuanititySelectorDropdown');
      expect(qtyDropdown).toBeInTheDocument();
    })
    test('Renders all quantities available', () => {
      let quantity;
      let sizeClicked = 'M';
      let sizeDropdown = component.getByTestId('SizeSelectorDropdown');
      fireEvent.change(sizeDropdown, {
        target: { value: sizeClicked }
      })
      let qtyAvailable = [];
      let skusAvailable = testProductStyles.results[testIndexes.style].skus;
      for (let item in skusAvailable) {
        if (skusAvailable[item].size === sizeClicked) {
          for (let i = 0; i < skusAvailable[item].qty; i++) {
          quantity = component.getByTestId(`SizeOption ${i}`);
          expect(quantity).toBeInTheDocument();
          }
        }
      }
    })
    test('Renders a button to add item to bag', () => {
      let addToBagButton = component.getByTestId('AddToBagButton');
      expect(addToBagButton.textContent).toBe('Add to Bag');
    })
    test('Renders a button to add item to MyOutfit', () => {
      let addToFavoriteButton = component.getByTestId('AddToFavoriteButton');
      expect(addToFavoriteButton.textContent).toBe('⭐' || '❤️');
    })
    test('Renders MyOutfit icon from star to heart, and back', () => {
      let addToFavoriteButton = component.getByTestId('AddToFavoriteButton');
      fireEvent.click(addToFavoriteButton);
      expect(addToFavoriteButton.textContent).toBe('❤️');
      fireEvent.click(addToFavoriteButton);
      expect(addToFavoriteButton.textContent).toBe('⭐');
    })
    // test('', () => {
    //   let addToBagButton = component.getByTestId('AddToBagButton');
    //   fireEvent.click(addToBagButton);
    //   expect(handleAddToBag(jest.fn())).toHaveBeenCalled();
    // })
  })