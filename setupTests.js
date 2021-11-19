import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import Adapter from 'enzyme-adapter-react-16';
// jest-react-hooks-shallow
// import enableHooks from 'jest-react-hooks-shallow';
// // pass an instance of jest to `enableHooks()`
// enableHooks(jest);

Enzyme.configure({ adapter: new Adapter() });