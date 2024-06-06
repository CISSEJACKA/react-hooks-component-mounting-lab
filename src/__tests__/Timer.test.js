import React from 'react';
import { mount } from 'enzyme'; // You'll need to install enzyme and enzyme-adapter-react-16
import Timer from '../components/Timer'; // Adjust the path based on your project structure

describe('<Timer />', () => {
  test('renders without crashing', () => {
    const wrapper = mount(<Timer />);
    expect(wrapper.exists()).toBe(true);
  });
});



