import { shallow } from 'enzyme';
import { GifGridItem } from '../components/GifGridItem';

describe('Test in <GifGridItem/> component', () => {
  test('should show the GifGridItem component', () => {
    const wrapper = shallow(<GifGridItem />);
    expect(wrapper).toMatchSnapshot();
  })
});
