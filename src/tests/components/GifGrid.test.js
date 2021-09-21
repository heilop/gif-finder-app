import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test in <GifGrid /> component', () => {

  const category = 'Rick and Morty';

  test('should show the GifGrid component', () => {

    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })

    const wrapper = shallow(<GifGrid category = { category } />);
    expect(wrapper).toMatchSnapshot();
  })

  test('should show items when images are loaded useFetchGifs', () => {

    const gifs = [
      {
        id: 'ABC',
        url: 'http://localhost/demo/image.jpg',
        title: 'Image Title',
      },
      {
        id: 'DEF',
        url: 'http://localhost/demo2/image.jpg',
        title: 'Image Title 2',
      },
    ]
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })

    const wrapper = shallow(<GifGrid category = { category } />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  })

});
