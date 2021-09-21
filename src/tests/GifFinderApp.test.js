import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import GifFinderApp from '../GifFinderApp';


describe('Test in <GifFinderApp />', () => {

  test('should show <GifFinderApp /> correctly', () => {
    const wrapper = shallow( < GifFinderApp / > );
    expect(wrapper).toMatchSnapshot();
  })

  test('should show a category list', () => {
    const categories = ['Mr Robot', 'The Wire'];

    const wrapper = shallow( < GifFinderApp defaultCategories = { categories}/ > );
    expect(wrapper.find('GifGrid').length).toBe( categories.length );
  })

})
