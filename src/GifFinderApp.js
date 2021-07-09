import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifFinderApp = () => {
  // const categories = ['Mr. Robot', 'The walking Dead', 'Ted Lasso'];
  const [categories, setCategories] = useState(['Mr. Robot', 'The walking Dead', 'Ted Lasso']);

  // const handleAdd = (e) => {
  //   // setCategories([...categories, 'House of Cards']);
  //   setCategories( categs => [...categs, 'House of Cards']);
  // }

  return (
    <>
      <h2>GifFinderApp</h2>
      <AddCategory setCategories = { setCategories } />
      <br />

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
