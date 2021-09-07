import React from 'react';
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category }) => {

  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{ category }</h3>
      { loading && <p className="card-grid animate__animated animate__flash">Loading</p> }

      <div className="card-grid animate__animated animate__fadeIn">

        {
          images.map(img => (
            <GifGridItem
              key = { img.id }
              img = {img}
              { ...img }
            />
          ))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
