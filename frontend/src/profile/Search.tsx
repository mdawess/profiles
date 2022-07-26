import React from 'react'

export default function Search() {
  return (
    <div className='search'>
      {/* add the search icon */}
      <input 
        type='text' 
        placeholder='Search' 
        onChange={() => search()}
      >
      </input>
    </div>
  )
}

const search = () => {
  return;
}
