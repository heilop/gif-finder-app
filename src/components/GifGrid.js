import React, { useEffect } from 'react'

export const GifGrid = ( { category }) => {

  useEffect(() => {
    getGifs();
  }, [])

  const getGifs = async () => {
    //WHSsSRkhdUsLb8H9KJR8CzZEdUdQouG6
    const url = `https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&api_key=WHSsSRkhdUsLb8H9KJR8CzZEdUdQouG6`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      }
    })

    console.log(gifs);
  }

  return (
    <div>
      <h3>{ category }</h3>
    </div>
  )
}
