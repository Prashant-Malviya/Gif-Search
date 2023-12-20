import React, { useEffect, useState } from "react";
import useGifSearch from "../../Hooks/useGifSearch";
import { FaSearch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Results from "../Results/Results";
import Spinner from "../../Spinner/Spinner";
import { signOut } from "firebase/auth";
import { database } from "../../Firebase/Firebase";
import { useNavigate } from "react-router-dom";


function Search() {

  const [tag,setTag] = useState('');
  const history = useNavigate();

  const {loading,gif,title,username,fetchData} = useGifSearch(tag);


  const handleClick = ()=>{
    signOut(database).then(val=>{
      history('/')
    })
  }

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
          <p className='text-tag'>{tag}</p>
          <MdCancel/>
        </div>
      </div>

    </div>
    {
      loading ? (<Spinner/>) : ( <Results gif = {gif} title={title} username={username}/>  )
    }
    
    <button 
    onClick={handleClick}
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Log Out
</button>

    </div>
    
  )
}

export default Search
