import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Movie from './Pages/Movie'
import SearchMovie from './Pages/SearchMovie'
import MovieDetails from './Pages/MovieDetails'
import { Navbar } from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<><SearchMovie /> <Movie /></>} />
        <Route path='movie/:id' element={<MovieDetails />} />
        <Route path='movies/:type' element={<h1>Hello Type Page</h1>} />
        <Route path='/*' element={<h1>ErrorPage</h1>} />
      </Routes>
    </Router>
  )
}

export default App
