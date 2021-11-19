// import dependencies for React, Jest, Enzyme
import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
// import module(s) under test
import Overview from '../../client/src/components/Overview/Overview.jsx';
import handleLeftArrowClick from '../../client/src/components/Overview/Overview.jsx';
import handleRightArrowClick from '../../client/src/components/Overview/Overview.jsx';
import handleThumbnailClick from '../../client/src/components/Overview/Overview.jsx';
import ImageGallery from '../../client/src/components/Overview/ImageGallery.jsx';
import ProductInformation from '../../client/src/components/Overview/ProductInformation.jsx';
import StyleSelector from '../../client/src/components/Overview/StyleSelector.jsx';
import AddToCart from '../../client/src/components/Overview/AddToCart.jsx';
import ProductSloganAndDescription from '../../client/src/components/Overview/ProductSloganAndDescription.jsx';
import ProductFeatures from '../../client/src/components/Overview/ProductFeatures.jsx';

// fixtures
const testProductId = 59553;
let testIndexes = { product: 0, style: 0, photo: 0 };
let testOutfitIds = [];
let testUpdateDetailsAndStyles = (productDetails, productStyles) => {
  // this.setState({
  //   currentProductDetails: productDetails,
  //   currentProductStyles: productStyles
  // })
 }
 let testHandleLeftArrowClick = () => {
    if (indexes.photo === 0) {
      let nextIndex = productStyles.results[indexes.style].photos.length - 1;
      setIndexes({...indexes, photo: nextIndex});
    } else {
      setIndexes({...indexes, photo: indexes.photo - 1});
    }
  }
  let testHandleRightArrowClick = () => {
    let nextIndex = (indexes.photo + 1) % productStyles.results[indexes.style].photos.length;
    setIndexes({...indexes, photo: nextIndex});
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
const testProductById = {
  "id": 59553,
  "campus": "hr-rpp",
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140.00",
  "created_at": "2021-10-18T22:50:41.839Z",
  "updated_at": "2021-10-18T22:50:41.839Z",
  "features": [
      {
          "feature": "Fabric",
          "value": "Canvas"
      },
      {
          "feature": "Buttons",
          "value": "Brass"
      }
  ]
}
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

// mock an API request
const server = setupServer(
  rest.get(`/products/${testProductId}`, (req, res, ctx) => {
    return res(ctx.json({data: 'test'}))
  })
);

// test suite
describe('<Overview />', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())
  let component;
  beforeEach(() => {
    component = render(<Overview updateDetailsAndStyles={testUpdateDetailsAndStyles} productById={testProductById} productStyles={testProductStyles} outfitIds={testOutfitIds} changeInOutfit={testChangeInOutfit} productId={testProductId}/>);
  })
  test('Renders without crashing', () => {
    expect(component).toBeDefined();
  })
  test('Renders an Overview container to be rendered into App', () => {
    let overviewContainer = component.getByTestId('Overview');
    expect(overviewContainer).toBeDefined();
  })
  test('Renders an Image Gallery component', () => {
    expect(ImageGallery).toBeDefined();
  })
  test('Renders a Product Information component', () => {
    expect(ProductInformation).toBeDefined();
  })
  test('Renders a Style Selector component', () => {
    expect(StyleSelector).toBeDefined();
  })
  test('Renders a Add to Cart component', () => {
    expect(AddToCart).toBeDefined();
  })
  test('Renders a Product Slogan and Description component', () => {
    expect(ProductSloganAndDescription).toBeDefined();
  })
  test('Renders a Product Features component', () => {
    expect(ProductFeatures).toBeDefined();
  })
  test('Accepts an object of product styles', () => {
    expect(typeof testProductStyles).toBe('object');
  })
  test('Accepts an object of current product details', () => {
    expect(typeof testProductById).toBe('object');
  })
  test('Accepts the current product ID from App', () => {
    expect(typeof testProductId).toBe('number');
  })
  test('Holds a function which passes updated product details to state', () => {
    expect(typeof testUpdateDetailsAndStyles).toBe('function');
  })
  test('Holds a function which passes data to App component when outfit is changed', () => {
    expect(typeof testChangeInOutfit).toBe('function');
  })
  test('Holds a function slides gallery to the left', () => {
    expect(handleLeftArrowClick).toBeDefined();
  })
  test('Holds a function slides gallery to the right', () => {
    expect(handleRightArrowClick).toBeDefined();
  })
  test('Holds a function select a thumbnail when clicked', () => {
    expect(handleThumbnailClick).toBeDefined();
  })
//   test('Passes product details to subcomponents', () => {
//       let productSloganAndDesc = render(<ProductSloganAndDescription productById={testProductById} />);
//       let slogan = productSloganAndDesc.getByTestId('ProductSloganHeader');
//       expect(slogan).toBe(testProductId.slogan);
//   })
//   test('Clicking a thumbnail in image gallery should fire handler in Overview', () => {
//       let imageGalleryComponent = render(<ImageGallery handleRightArrowClick={testHandleRightArrowClick} handleLeftArrowClick={testHandleLeftArrowClick} handleThumbnailClick={handleThumbnailClick} productStyles={testProductStyles} indexes={testIndexes} />);
//       let leftArrowClick = imageGalleryComponent.getByTestId('SlideGalleryLeftButtonTest');
//       fireEvent.click(leftArrowClick);
//       expect(handleLeftArrowClick).toHaveBeenCalled();
//   })
//   test('Clicking a thumbnail in image gallery should fire handler in Overview', () => {
//     let imageGalleryComponent = render(<ImageGallery handleRightArrowClick={testHandleRightArrowClick} handleLeftArrowClick={testHandleLeftArrowClick} handleThumbnailClick={handleThumbnailClick} productStyles={testProductStyles} indexes={testIndexes} />);
//     let rightArrowClick = screen.getAllByText('data-testid="SlideGalleryRightButtonTest"');
//     fireEvent.click(rightArrowClick);
//     expect(handleRightArrowClick).toHaveBeenCalled();
// })
})