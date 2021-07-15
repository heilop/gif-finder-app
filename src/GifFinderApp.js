import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifFinderApp = () => {

  const [categories, setCategories] = useState(['Mr. Robot']);

  return (
    <>
      <h2>GifFinderApp</h2>
      <AddCategory setCategories = { setCategories } />
      <br />

      <ol>
        {
          categories.map(category => (
            <GifGrid
              key={ category }
              category={ category }
            />
          ))
        }
      </ol>
    </>
  );
};

export default GifFinderApp;