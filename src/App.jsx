import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './Pages/Login'
import Movie from './Pages/Movie'
import SearchMovie from './Pages/SearchMovie'

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <SearchMovie />
    <Movie />
  </>)
}

export default App
