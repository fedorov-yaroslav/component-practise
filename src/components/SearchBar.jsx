import { useState } from 'react'

function SearchBar({input, setInput}){

  return (
      <input
          type="text"
          value = {input}
          onChange = {(e) => setInput(e.target.value)}
      />
  )
}

export default SearchBar