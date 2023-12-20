import React from 'react'
import { IoIosStar } from "react-icons/io";


function Gif({gif,title,username}) {



  return (
    <div className='gif-content'>
    <img
    className='gif-image'
     src={gif} 
     alt="img"
    
     />
     <div className='py-3'>
     <p className='gif-name'>{title}</p><br /><br />
     <p className='gif-details'>@{username}</p>
     </div>
     
     <IoIosStar color='gold' className='cursor-pointer' />

      
    </div>
  )
}

export default Gif
