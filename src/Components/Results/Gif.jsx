import React from 'react'
import { IoIosStar } from "react-icons/io";


function Gif({gif,gif2,gif3}) {



  return (
    <div className='gif-content'>
    <img
    className='gif-image'
     src={gif} 
     alt="img"
    
     />
     <p className='gif-name'>Viktoria Bolonina</p>
     <p className='gif-details'>@prashant</p>
     <IoIosStar color='gold' />

      
    </div>
  )
}

export default Gif
