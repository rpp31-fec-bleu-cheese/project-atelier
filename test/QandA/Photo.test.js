<<<<<<< HEAD:test/QandA/Photo.test.js
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Photo from '../../client/src/components/Q&A/questionComponents/Photo.jsx';
import QuestionEntry from '../../client/src/components/Q&A/questionComponents/QuestionEntry.jsx';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
=======
// import React from 'react';
// import Enzyme, { shallow, mount } from 'enzyme';
// import Photo from '../../client/src/components/Q&A/questionComponents/Photo.jsx';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
>>>>>>> 3ddc22829aef0e86a87eb73489e555817b4f26f1:test/Q&A/Photo.test.js

// Enzyme.configure({ adapter: new Adapter() });

<<<<<<< HEAD:test/QandA/Photo.test.js
describe('<Photo />', () => {
  test('it should render Photo component', () => {
    const wrapper = shallow(<Photo />);
    expect(wrapper.find('.photo')).not.toBeUndefined();
  });


 });
=======
// describe('<Photo />', () => {
//   test('it should render Photo component', () => {
//     const wrapper = shallow(<Photo />);
//     expect(wrapper.find('.photo')).not.toBeUndefined();
//   })
// });
>>>>>>> 3ddc22829aef0e86a87eb73489e555817b4f26f1:test/Q&A/Photo.test.js
