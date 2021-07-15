import { shallow } from 'enzyme';
import { GifGridItem } from '../components/GifGridItem';

describe('Test in <GifGridItem/> component', () => {
  test('should show the GifGridItem component', () => {

    const title = 'Demo title';
    const url = 'https://via.placeholder.com/150';

    const wrapper = shallow(
      <GifGridItem
        title = { title }
        url = { url }
      />);

    expect(wrapper).toMatchSnapshot();
  })
});
