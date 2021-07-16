import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Test in <GifGridItem/> component', () => {

  const title = 'Demo title';
  const url = 'https://via.placeholder.com/150';

  const wrapper = shallow(
    <GifGridItem
      title = { title }
      url = { url }
    />);


  test('should show the GifGridItem component', () => {

    expect(wrapper).toMatchSnapshot();
  })

  test('should has a paragraph with title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe( title );
  })

  test('should has the image equal than url and alt props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  })

  test('should has animate_fadeIn class', () => {
    const div = wrapper.find('div');

    expect(div.hasClass('animate_fadeIn')).toBe(true);

    // const className = div.prop('className');

    // expect(className.includes('animate_fadeIn')).toBe(true);
  })


});
