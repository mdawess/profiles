import React from 'react'

type SearchProps = {
  setQuery: Function;
}

export default function Search(props: SearchProps) {
  return (
    <div className='search'>
      {/* add the search icon */}
      <input 
        className='search-input'
        type='text' 
        placeholder='Search Competitors by First or Last Name' 
        onChange={event => props.setQuery(event.target.value)}
      >
      </input>
    </div>
  )
}
