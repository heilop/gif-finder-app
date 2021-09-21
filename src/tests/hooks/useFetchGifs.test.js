import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";


describe('Test in the useFetchGifs hook', () => {
  test('should return the initial state', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Mr Robot'));
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  })

  test('should return one array of images and loading in false', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Mr Robot'));
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  })
})
