import { useState } from 'react'
import './App.css'
import Search from './Components/Search/Search'
import Results from './Components/Results/Results'
import { Route, Routes } from 'react-router-dom'
import Authenticate from './Authentication/Authenticate'

function App() {

  return (
    <div className='Gif-Search'>

      {/* <Search /> */}
      
      <Routes>
        <Route path="/" element={<Authenticate/>} />
        <Route path="/home" element={ <Search /> } />
      </Routes>
      
      

    </div>
  )
}

export default App

