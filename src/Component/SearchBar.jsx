import React from 'react'
import "./SearchBar.css"

export const SearchBar = () => {
  return (
    <div>
      <div className='search-bar'>
        <input className='search' type='text' placeholder='Search'></input>
      </div>
        
        {/* <input type='text'> enter </input> */}
    </div>
  )
}
