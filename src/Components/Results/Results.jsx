import React from 'react'
import Gif from './Gif'
import Pagination from './Pagination'

function Results({gif,title,username}) {
  return (
    <div className='results'>
    <div className='gifs'>
        <Gif gif = {gif} title={title} username = {username} />
        <Gif gif = {gif} title={title} username = {username} />
        <Gif gif = {gif} title={title} username = {username} />
    </div>
    
    <div className="pagination py-6">
      <Pagination/>
    </div>
      
    </div>
  )
}

export default Results
