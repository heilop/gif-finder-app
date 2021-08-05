import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategory';

describe('Test in <AddCategory />', () => {

  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories = { setCategories }/>);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories = { setCategories }/>);
  });

  test('should show the right component', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('should change the text field', () => {
    const input = wrapper.find('input');
    const value = 'Hello world!';
    input.simulate('change', { target: { value } });

    expect(wrapper.find('p').text().trim()).toBe(value);
  })

  test('should not post the info with submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect(setCategories).not.toHaveBeenCalled();
  })

})
