import { getGifs } from "../../helpers/getGifs"


describe('Test with getGifs fetch', () => {

  test('should get 10 elements', async() => {
    const gifs = await getGifs('Better call to Saul');

    expect(gifs.length).toBe(10);
  })

  test('should get an empty array when no pass any category', async () => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  })

})
