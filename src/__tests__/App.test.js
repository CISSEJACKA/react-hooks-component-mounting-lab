import React from 'react';
import { shallow } from 'enzyme'; // You'll need to install enzyme and enzyme-adapter-react-16
import App from '../components/App'; // Adjust the path based on your project structure

describe('<App />', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});






