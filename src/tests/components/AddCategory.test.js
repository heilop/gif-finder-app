import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Test in <AddCategory />', () => {

  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories = { setCategories }/>);

  test('should show the right component', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('should change the text field', () => {
    const input = wrapper.find('input');
    const value = 'Hello world!';
    input.simulate('change', { target: { value } });

    expect(wrapper.find('p').text().trim()).toBe(value);
  })

})
