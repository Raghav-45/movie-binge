import * as React from 'react';
import './App.css';
import Login from './Pages/Login'
import Movie from './Pages/Movie'
import SearchMovie from './Pages/SearchMovie'

function App() {
  return (<>
    <SearchMovie />
    <Movie />
  </>);
}

export default App;