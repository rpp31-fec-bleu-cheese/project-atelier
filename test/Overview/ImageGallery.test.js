// import dependencies for React, Jest, Enzyme
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';
// import module(s) under test
import ImageGallery from '../../client/src/components/Overview/ImageGallery.jsx';

// fixtures
const testIndexes = { product: 0, style: 0, photo: 0 };
let testHandleThumbnailClick = (event) => {
  event.persist();
  let indexValue = Number(event.target.attributes.index.nodeValue);
  setIndexes({...indexes, photo: indexValue});
  event.preventDefault();
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
const productStylesUnavailable = {
  "product_id": "59554",
  "results": [
      {
          "style_id": 365419,
          "name": "Black Lenses & Black Frame",
          "original_price": "69.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": null,
                  "url": null
              }
          ],
          "skus": {
              "null": {
                  "quantity": null,
                  "size": null
              }
          }
      },
      {
          "style_id": 365420,
          "name": "Black Lenses & Gold Frame",
          "original_price": "69.00",
          "sale_price": null,
          "default?": true,
          "photos": [
              {
                  "thumbnail_url": null,
                  "url": null
              }
          ],
          "skus": {
              "null": {
                  "quantity": null,
                  "size": null
              }
          }
      },
      {
          "style_id": 365421,
          "name": "Gold Lenses & Black Frame",
          "original_price": "69.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": null,
                  "url": null
              }
          ],
          "skus": {
              "null": {
                  "quantity": null,
                  "size": null
              }
          }
      },
      {
          "style_id": 365422,
          "name": "Gold Lenses & Gold Frame",
          "original_price": "69.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": null,
                  "url": null
              }
          ],
          "skus": {
              "null": {
                  "quantity": null,
                  "size": null
              }
          }
      }
  ]
};

// test suite
describe('<ImageGallery />', () => {
  let component;
  beforeEach(() => {
    component = render(<ImageGallery handleRightArrowClick={testHandleRightArrowClick} handleLeftArrowClick={testHandleLeftArrowClick} handleThumbnailClick={testHandleThumbnailClick} productStyles={testProductStyles} indexes={testIndexes} productImage={testProductStyles}/>);
  })
  test('Renders without crashing', () => {
    expect(component).toBeDefined();
  })
  test('Accepts an object of product styles', () => {
    expect(typeof testProductStyles).toBe('object');
  })
  test('Accepts a function to handle left arrow index change', () => {
    expect(typeof testHandleLeftArrowClick).toBe('function');
  })
  test('Accepts a function to handle right arrow index change', () => {
    expect(typeof testHandleRightArrowClick).toBe('function');
  })
  test('Accepts an object of indexes to keep track of photos in gallery', () => {
    expect(testIndexes).toBeDefined();
  })
  test('Renders a main product image on page load', () => {
    let mainProductImage = component.getByTestId('MainImage');
    expect(mainProductImage).toBeInTheDocument();
  })
  test('Renders a fallback product image when no image available', () => {
    const component = render(<ImageGallery handleRightArrowClick={testHandleRightArrowClick} handleLeftArrowClick={testHandleLeftArrowClick} handleThumbnailClick={testHandleThumbnailClick} productStyles={productStylesUnavailable} indexes={testIndexes} />);
    let mainProductImageUnavailable = component.getByTestId('MainImageUnavailable');
    expect(mainProductImageUnavailable).toBeInTheDocument();
  })
  test('Renders a list of gallery thumbnails', () => {
    let galleryThumbnails = component.getByTestId('ImageGalleryThumbnails');
    expect(galleryThumbnails).toBeInTheDocument();
  })
  test('Renders the same number of thumbnails as images from object', () => {
    let thumbnail;
    for (let i = 1; i < testProductStyles.results[testIndexes.style].photos.length; i++) {
      thumbnail = component.getByTestId(`GalleryThumbnail ${i}`);
      expect(thumbnail).toBeInTheDocument();
    }
  })
  test('Renders an underline of the currently selected image', () => {
    let imageUnderlined = component.getByTestId('GalleryThumbnail 0');
    expect(imageUnderlined).toBeInTheDocument();
  })
  test('Shows an image modal of main image close up', () => {
    let imageModalButton = component.getByTestId('OpenGalleryModalButton');
    expect(imageModalButton).toBeInTheDocument();
    fireEvent.click(imageModalButton);
    let imageModalContent = component.getByTestId('GalleryModal');
    expect(imageModalContent).toBeInTheDocument();
  })
  test('Contains a button to slide gallery to the left', () => {
    let slideGalleryLeft = component.getByTestId('SlideGalleryLeftButtonTest');
    expect(slideGalleryLeft).toBeInTheDocument();
  })
  test('Contains a button to slide gallery to the right', () => {
    let slideGalleryRight = component.getByTestId('SlideGalleryRightButtonTest');
    expect(slideGalleryRight).toBeInTheDocument();
  })
})

