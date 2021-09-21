import { useFetchGifs } from "../../hooks/useFetchGifs";


describe('Test in the useFetchGifs hook', () => {
  test('should return the initial state', () => {
    const { data, loading } = useFetchGifs(['Mr Robot']);

    console.log(data. loading);
  })

})
