import React from 'react'
import { IoIosStar } from "react-icons/io";


function Gif() {
  return (
    <div className='gif-content'>
    <img
    className='gif-image'
     src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?cs=srgb&dl=pexels-andre-furtado-1264210.jpg&fm=jpg" 
     alt="img"
    
     />
     <p className='gif-name'>Viktoria Bolonina</p>
     <p className='gif-details'>@prashant</p>
     <IoIosStar color='gold' />

      
    </div>
  )
}

export default Gif
