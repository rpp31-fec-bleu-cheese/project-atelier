


import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import sinon from 'sinon';
import React from 'react';
import jest from 'jest';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import {screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom';

import Related_Outfit from '../../client/src/components/Related_Outfit/Related_Outfit.jsx';

Enzyme.configure({adapter:new Adapter()});
describe('Related_Outfit', () => {
    let component;
    beforeEach(() => {
        const productInfo =  {
            "id": 59555,
            "campus": "hr-rpp",
            "name": "Morning Joggers",
            "slogan": "Make yourself a morning person",
            "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
            "category": "Pants",
            "default_price": "40.00",
            "created_at": "2021-10-18T22:50:41.839Z",
            "updated_at": "2021-10-18T22:50:41.839Z",
            "features": [
                {
                    "feature": "Fabric",
                    "value": "100% Cotton"
                },
                {
                    "feature": "Cut",
                    "value": "Skinny"
                }
            ]
        }
        const productStyles = {
            "product_id": "59555",
            "results": [
                {
                    "style_id": 365423,
                    "name": "Black",
                    "original_price": "40.00",
                    "sale_price": null,
                    "default?": true,
                    "photos": [
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                        }
                    ],
                    "skus": {
                        "2122813": {
                            "quantity": 8,
                            "size": "XS"
                        },
                        "2122814": {
                            "quantity": 16,
                            "size": "S"
                        },
                        "2122815": {
                            "quantity": 17,
                            "size": "M"
                        },
                        "2122816": {
                            "quantity": 10,
                            "size": "L"
                        },
                        "2122817": {
                            "quantity": 15,
                            "size": "XL"
                        },
                        "2122818": {
                            "quantity": 6,
                            "size": "XXL"
                        }
                    }
                },
                {
                    "style_id": 365424,
                    "name": "Grey",
                    "original_price": "40.00",
                    "sale_price": null,
                    "default?": false,
                    "photos": [
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=965&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1490427712608-588e68359dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1490427712608-588e68359dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                        }
                    ],
                    "skus": {
                        "2122819": {
                            "quantity": 8,
                            "size": "XS"
                        },
                        "2122820": {
                            "quantity": 16,
                            "size": "S"
                        },
                        "2122821": {
                            "quantity": 17,
                            "size": "M"
                        },
                        "2122822": {
                            "quantity": 10,
                            "size": "L"
                        },
                        "2122823": {
                            "quantity": 15,
                            "size": "XL"
                        },
                        "2122824": {
                            "quantity": 6,
                            "size": "XXL"
                        }
                    }
                },
                {
                    "style_id": 365425,
                    "name": "Goldenrod",
                    "original_price": "40.00",
                    "sale_price": "35.00",
                    "default?": false,
                    "photos": [
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
                        },
                        {
                            "thumbnail_url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                            "url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
                        }
                    ],
                    "skus": {
                        "2122825": {
                            "quantity": 8,
                            "size": "XS"
                        },
                        "2122826": {
                            "quantity": 16,
                            "size": "S"
                        },
                        "2122827": {
                            "quantity": 17,
                            "size": "M"
                        },
                        "2122828": {
                            "quantity": 10,
                            "size": "L"
                        },
                        "2122829": {
                            "quantity": 15,
                            "size": "XL"
                        },
                        "2122830": {
                            "quantity": 6,
                            "size": "XXL"
                        }
                    }
                },
            ]
        }

        component = mount(<Related_Outfit currentProductDetails={productInfo} currentProductStyles={productStyles}/>);
      });
      it('Related_Outfit should render correctly', (done) => {
          expect(component.find('#Related_Outfit')).not.toBeUndefined();
          done();
      });
      it('when the state updates with outfits, the div with id "Outfit" is displayed', (done) => {
        component.setState({outfits:[
            {
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
              ],
              "image":"https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          },
          {
              "id": 59555,
              "campus": "hr-rpp",
              "name": "Morning Joggers",
              "slogan": "Make yourself a morning person",
              "description": "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
              "category": "Pants",
              "default_price": "40.00",
              "created_at": "2021-10-18T22:50:41.839Z",
              "updated_at": "2021-10-18T22:50:41.839Z",
              "features": [
                  {
                      "feature": "Fabric",
                      "value": "100% Cotton"
                  },
                  {
                      "feature": "Cut",
                      "value": "Skinny"
                  }
              ],
              "image":"https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          },

          ]
        });
          expect(component.find('#Outfit')).not.toBeUndefined();
          done();
      });
      it('Can find the star button in the DOM', (done) => {
        expect(component.find('#Overlay_Star')).not.toBeUndefined();
        done();
      });
      it('Can find the cross button in the DOM', (done) => {
        expect(component.find('#Overlay_Circle')).not.toBeUndefined();
        done();
      });
});

