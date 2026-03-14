function SearchBar() {
  return (
      <>
        <input type="text" value = {input} onChange = {(e) => {setInput(e.target.value)}}/>
      </>
  )
}

export default SearchBar;