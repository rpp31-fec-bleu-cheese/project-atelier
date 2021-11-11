

// import React from 'react';
// import Enzyme from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import 'jsdom-global/register';
// import sinon from 'sinon';
// import jest from 'jest';
// import Related_Outfit from '../client/src/components/Related_Outfit/Related_Outfit.jsx';


// Enzyme.configure({adapter:new Adapter()});


// describe('Related_Outfit', () => {
//   //test to see if Related_Outfit component is rendered
//   it('Related_Outfit should render correctly', () => {
//     const wrapper = Enzyme.mount(<Related_Outfit/>);
//     expect(wrapper).toMatchSnapshot();

//    // expect(Foo.prototype.componentDidMount).to.have.property('callCount', 1);
//   });
//   it('componentDidMount() is called', (done) => {
//     const wrapper = Enzyme.mount(<Related_Outfit/>);
//     const instance = wrapper.instance();
//     sinon.spy(instance, 'fetchRelatedInfo');
//     instance.componentDidMount();
//     console.log('instance:', instance.fetchRelatedInfo);

//     expect(instance.fetchRelatedInfo).toHaveBeenCalledTimes(1);
//     done();
//    // expect(Foo.prototype.componentDidMount).to.have.property('callCount', 1);
//   });
//   /*it('calls componentDidMount', () => {
//     const wrapper = Enzyme.mount(<Related_Outfit/>);
//     sinon.spy(Related_Outfit.prototype,'componentDidMount');

//     //expect(Related_Outfit.prototype.componentDidMount).to.have.property('callCount', 1);
//   });*/
//   /*it('Related_ProductInfo should render', () => {
//     const wrapper = Enzyme.mount(<Related_Outfit/>);
//     //console.log(wrapper.find(Related_ProductInfo).debug())
//     expect(wrapper.matchesElement(<button className="NextProd Related"></button>)).to.equal(true);
//     expect(wrapper.find('Related_ProductInfo')).to.equal(true);
//   })*/

// });