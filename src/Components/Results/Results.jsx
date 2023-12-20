import React from 'react'
import Gif from './Gif'
import Pagination from './Pagination'

function Results({gif,gif2,gif3}) {
  return (
    <div className='results'>
    <div className='gifs'>
        <Gif gif = {gif} />
        <Gif gif={gif2}/>
        <Gif gif={gif3} />
    </div>
    
    <div className="pagination">
      <Pagination />
    </div>
      
    </div>
  )
}

export default Results
