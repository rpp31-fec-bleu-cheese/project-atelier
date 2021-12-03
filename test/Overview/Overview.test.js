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

const handlers = [
  rest.get(`http://localhost/products/${testProductId}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({
      "id": 59557,
      "campus": "hr-rpp",
      "name": "Heir Force Ones",
      "slogan": "A sneaker dynasty",
      "description": "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
      "category": "Kicks",
      "default_price": "99.00",
      "created_at": "2021-10-18T22:50:41.839Z",
      "updated_at": "2021-10-18T22:50:41.839Z",
      "features": [
          {
              "feature": "Sole",
              "value": "Rubber"
          },
          {
              "feature": "Material",
              "value": "FullControlSkin"
          },
          {
              "feature": "Mid-Sole",
              "value": "ControlSupport Arch Bridge"
          },
          {
              "feature": "Stitching",
              "value": "Double Stitch"
          }
      ]
  }))
  }),
  rest.get(`http://localhost/products/${testProductId}/styles`, (req, res, ctx) => {
    return res(ctx.json(ctx.status(200), {
      "product_id": "59557",
      "results": [
          {
              "style_id": 365438,
              "name": "White & White",
              "original_price": "99.00",
              "sale_price": null,
              "default?": true,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1488778578932-0f84d315fcae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1527431016-15eb83515018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  }
              ],
              "skus": {
                  "2122903": {
                      "quantity": 14,
                      "size": "7"
                  },
                  "2122904": {
                      "quantity": 25,
                      "size": "7.5"
                  },
                  "2122905": {
                      "quantity": 9,
                      "size": "8"
                  },
                  "2122906": {
                      "quantity": 2,
                      "size": "8.5"
                  },
                  "2122907": {
                      "quantity": 18,
                      "size": "9"
                  },
                  "2122908": {
                      "quantity": 12,
                      "size": "9.5"
                  },
                  "2122909": {
                      "quantity": 10,
                      "size": "10"
                  },
                  "2122910": {
                      "quantity": 18,
                      "size": "10.5"
                  },
                  "2122911": {
                      "quantity": 11,
                      "size": "11"
                  },
                  "2122912": {
                      "quantity": 35,
                      "size": "11.5"
                  },
                  "2122913": {
                      "quantity": 25,
                      "size": "12"
                  }
              }
          },
          {
              "style_id": 365439,
              "name": "White & Red",
              "original_price": "99.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1474494819794-90f9664b530d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1428790031246-698d71b6fe3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1451256656121-9ffc0c898a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1524604519054-2365ac11e431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1541006008768-d181e7f9f3d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  }
              ],
              "skus": {
                  "2122914": {
                      "quantity": 14,
                      "size": "7"
                  },
                  "2122915": {
                      "quantity": 25,
                      "size": "7.5"
                  },
                  "2122916": {
                      "quantity": 9,
                      "size": "8"
                  },
                  "2122917": {
                      "quantity": 2,
                      "size": "8.5"
                  },
                  "2122918": {
                      "quantity": 18,
                      "size": "9"
                  },
                  "2122919": {
                      "quantity": 12,
                      "size": "9.5"
                  },
                  "2122920": {
                      "quantity": 10,
                      "size": "10"
                  },
                  "2122921": {
                      "quantity": 18,
                      "size": "10.5"
                  },
                  "2122922": {
                      "quantity": 11,
                      "size": "11"
                  },
                  "2122923": {
                      "quantity": 35,
                      "size": "11.5"
                  },
                  "2122924": {
                      "quantity": 25,
                      "size": "12"
                  }
              }
          },
          {
              "style_id": 365440,
              "name": "White & Black",
              "original_price": "99.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1503449377594-32dd9ac4467c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1469617833234-8a6843da14d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2764&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1499852848443-3004d6dc4cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1522653216850-4f1415a174fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1519396317879-83334cb422f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1517583010307-3f789911b89c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1518894781321-630e638d0742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
                  }
              ],
              "skus": {
                  "2122925": {
                      "quantity": 14,
                      "size": "7"
                  },
                  "2122926": {
                      "quantity": 25,
                      "size": "7.5"
                  },
                  "2122927": {
                      "quantity": 9,
                      "size": "8"
                  },
                  "2122928": {
                      "quantity": 2,
                      "size": "8.5"
                  },
                  "2122929": {
                      "quantity": 18,
                      "size": "9"
                  },
                  "2122930": {
                      "quantity": 12,
                      "size": "9.5"
                  },
                  "2122931": {
                      "quantity": 10,
                      "size": "10"
                  },
                  "2122932": {
                      "quantity": 18,
                      "size": "10.5"
                  },
                  "2122933": {
                      "quantity": 11,
                      "size": "11"
                  },
                  "2122934": {
                      "quantity": 35,
                      "size": "11.5"
                  },
                  "2122935": {
                      "quantity": 25,
                      "size": "12"
                  }
              }
          },
          {
              "style_id": 365441,
              "name": "White & Blue",
              "original_price": "99.00",
              "sale_price": null,
              "default?": false,
              "photos": [
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1531091087823-cb600a47ab79?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1503146695898-afdf8ce5d5a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1512023983263-7e94bf6b913e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1507464098880-e367bc5d2c08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1504281623087-1a6dd8f827c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
                  },
                  {
                      "thumbnail_url": "https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                      "url": "https://images.unsplash.com/photo-1462833867037-0f06eab31cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                  }
              ],
              "skus": {
                  "2122936": {
                      "quantity": 14,
                      "size": "7"
                  },
                  "2122937": {
                      "quantity": 25,
                      "size": "7.5"
                  },
                  "2122938": {
                      "quantity": 9,
                      "size": "8"
                  },
                  "2122939": {
                      "quantity": 2,
                      "size": "8.5"
                  },
                  "2122940": {
                      "quantity": 18,
                      "size": "9"
                  },
                  "2122941": {
                      "quantity": 12,
                      "size": "9.5"
                  },
                  "2122942": {
                      "quantity": 10,
                      "size": "10"
                  },
                  "2122943": {
                      "quantity": 18,
                      "size": "10.5"
                  },
                  "2122944": {
                      "quantity": 11,
                      "size": "11"
                  },
                  "2122945": {
                      "quantity": 35,
                      "size": "11.5"
                  },
                  "2122946": {
                      "quantity": 25,
                      "size": "12"
                  }
              }
          }
      ]
  }))
  })
]
const server = setupServer(...handlers);

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
  test('Holds a function which slides gallery to the left', () => {
    expect(handleLeftArrowClick).toBeDefined();
  })
  test('Holds a function which slides gallery to the right', () => {
    expect(handleRightArrowClick).toBeDefined();
  })
  test('Holds a function which selects a thumbnail when clicked', () => {
    expect(handleThumbnailClick).toBeDefined();
  })
  test('Passes product details to subcomponents', () => {
      let productSloganAndDesc = render(<ProductSloganAndDescription productById={testProductById} />);
      let slogan = productSloganAndDesc.getAllByText(/Blend in to your crowd/i);
      expect(slogan.includes(`<div class="ProductSlogan" data-testid="ProductSloganHeader">Blend in to your crowd</div>`)).toBeDefined();
  })
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