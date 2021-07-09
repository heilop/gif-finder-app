import React, { useState } from 'react'

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('Hello World!');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted!');
  }

  return (
    <form onSubmit = { handleSubmit } >
      <input
        type="text"
        value = { inputValue }
        onChange = { handleInputChange }
      />
    </form>
  )
}
