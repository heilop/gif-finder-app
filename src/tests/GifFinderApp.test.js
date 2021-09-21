import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import GifFinderApp from '../GifFinderApp';


describe('Test in <GifFinderApp />', () => {
  let wrapper = shallow(<GifFinderApp />);

  test('should show <GifFinderApp /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

})
