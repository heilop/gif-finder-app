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

    const gifs = [{
      id: 'ABC',
      url: 'http://localhost/demo/image.jpg',
      title: 'Image Title',
    }]
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })

    const wrapper = shallow(<GifGrid category = { category } />);

  })

});
