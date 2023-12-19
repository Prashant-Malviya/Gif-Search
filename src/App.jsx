import { useState } from 'react'
import './App.css'
import Search from './Components/Search/Search'
import Results from './Components/Results/Results'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='Gif-Search'>

      <Search />
      <Results />

    </div>
  )
}

export default App

