import React from 'react'
import Gif from './Gif'
import Pagination from './Pagination'

function Results() {
  return (
    <div className='results'>
    <div className='gifs'>
        <Gif />
        <Gif />
        <Gif />
    </div>
    
    <div className="pagination">
      <Pagination />
    </div>
      
    </div>
  )
}

export default Results
