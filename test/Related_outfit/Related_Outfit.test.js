


import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
//import 'jsdom-global/register';
import sinon from 'sinon';
import React from 'react';
import jest from 'jest';
import Enzyme from 'enzyme';
import { shallow, mount, render } from 'enzyme';
import Related_Outfit from '../../client/src/components/Related_Outfit/Related_Outfit.jsx';

Enzyme.configure({adapter:new Adapter()});


describe('Related_Outfit', () => {
  //test to see if Related_Outfit component is rendered
  it('Related_Outfit should render correctly', (done) => {
      const wrapper = mount(<Related_Outfit/>);
      expect(wrapper.find('#Related_Outfit')).not.toBeUndefined();
      done();
  });

  it('when the state updates with outfits, the div with id "Outfit" is displayed', (done) => {
    const wrapper = Enzyme.mount(<Related_Outfit/>);

    wrapper.setState({outfits:[
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
  //console.log("after setting state");
  //console.log('wrapper.state', wrapper.state());
  expect(wrapper.find('#Outfit')).not.toBeUndefined();
  done();
  });
  it('Can find the star button in the DOM', (done) => {
    const wrapper = Enzyme.mount(<Related_Outfit/>);

    wrapper.setState({outfits:[
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


    ]
    });
     expect(wrapper.find('#Overlay_Star')).not.toBeUndefined();
     done();
  });
  it('Can find the cross button in the DOM', (done) => {
    const wrapper = Enzyme.mount(<Related_Outfit/>);

    wrapper.setState({relatedProducts:[
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


    ]
    });
     expect(wrapper.find('#Overlay_Circle')).not.toBeUndefined();
    done();
  });

});