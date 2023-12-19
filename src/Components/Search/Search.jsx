import React from 'react'
import { FaSearch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

function Search() {
  return (
    <div className='search-module'>
      <div className='search-components'>

      <div className="search-box">
        <div className="search-icon">
        <FaSearch />
        </div>
        <input 
        type="text"
        className='text-search'
        placeholder='Search here'
         />
      </div>
        
        <button className='search-button'>Search</button>
      </div>

      <div className="tags">
        <div className='tag'>
          <p className='text-tag'>photography</p>
          <MdCancel/>
        </div>
      </div>

    </div>
  )
}

export default Search
