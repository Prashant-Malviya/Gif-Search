import React, { useEffect, useState } from "react";
import useGifSearch from "../../Hooks/useGifSearch";
import { FaSearch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Results from "../Results/Results";
import Spinner from "../../Spinner/Spinner";


function Search() {

  const [tag,setTag] = useState('');

  const {loading,gif,gif2,gif3,fetchData} = useGifSearch(tag);

  return (
    <div>
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
        onChange={(event)=> setTag(event.target.value)}
        value={tag}
        
         />
      </div>
        
        <button 
        className='search-button'
        onClick={()=>fetchData()}
        >Search</button>
      </div>

      <div className="tags">
        <div className='tag'>
          <p className='text-tag'>photography</p>
          <MdCancel/>
        </div>
      </div>

    </div>
    {
      loading ? (<Spinner/>) : ( <Results gif = {gif} gif2 = {gif2} gif3 = {gif3} />  )
    }
    

    </div>
    
  )
}

export default Search
