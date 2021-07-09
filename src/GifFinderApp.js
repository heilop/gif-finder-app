import React, { useState } from 'react';

const GifFinderApp = () => {
  // const categories = ['Mr. Robot', 'The walking Dead', 'Ted Lasso'];
  const [categories, setCategories] = useState(['Mr. Robot', 'The walking Dead', 'Ted Lasso']);

  const handleAdd = (e) => {
    // setCategories([...categories, 'House of Cards']);
    setCategories( categs => [...categs, 'House of Cards']);
  }

  return (
    <>
      <h2>GifFinderApp</h2>
      <br />

      <button onClick={handleAdd}>Add Category</button>

      <ol>
        {
          categories.map(category => {
            return <li key = { category } > { category } </li>
          })
        }
      </ol>
    </>
  );
};

export default GifFinderApp;
