import React from 'react'
import Gif from './Gif'
import Pagination from './Pagination'
import Gif2 from './Gif2'
import Gif3 from './Gif3'

function Results({gif,gif2,gif3}) {
  return (
    <div className='results'>
    <div className='gifs'>
        <Gif gif = {gif} />
        <Gif2 gif2={gif2}/>
        <Gif3 gif3={gif3} />
    </div>
    
    <div className="pagination">
      <Pagination />
    </div>
      
    </div>
  )
}

export default Results
