import React, { useState } from 'react'
import Spinner from '../../Spinner/Spinner';
import Results from './Results';
import useGifSearch from '../../Hooks/useGifSearch';
import Search from '../Search/Search';

function Pagination({tag}) {
  const [page,setPage] = useState(1);
  const {fetchData} = useGifSearch();
  function handleNextClick(){
    // fetchData(tag);
    setPage(page+1)
  }

  return (
    <div className='numbers'>
      <button 
      className='btn border' 
      onClick={()=>{
       return page<=1 ? (setPage(1)) : (setPage(page-1))}
        }>Previous</button>
      <p className='font-bold'>{page}</p>
      {/* <p>2</p>
      <p>3</p> */}
      <button className='btn border' onClick={handleNextClick}>Next</button>
    </div>
  )
}

export default Pagination
