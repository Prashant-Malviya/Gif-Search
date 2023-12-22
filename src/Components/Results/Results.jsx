import React, { useState } from 'react'
import Gif from './Gif'
import Pagination from './Pagination'
import useGifSearch from '../../Hooks/useGifSearch';

function Results({tag}) {

    const {gif} = useGifSearch(tag);
    const [title,setTitle] = useState("");
    const [username,setUsername] = useState("");
    let i=1;
    console.log(gif)
     
      
    

  return (
    <div className='results'>
    <div className='gifs'>
       {
        
        gif.map((gif)=>(
          <Gif gif={gif.images.fixed_height.url} title={gif.title} username={gif.username} key={gif.id} />
        ))
        
       }
    </div>
    
    <div className="pagination py-6">
      <Pagination/>
    </div>
      
    </div>
  )
}

export default Results
