import * as React from 'react';
import { useState } from 'react'
import './App.css';
import Login from './Pages/Login'
import Movie from './Pages/Movie'
import { MovieThumb } from './Components/MovieComp'

import { Button, SimpleGrid } from '@chakra-ui/react'

function App() {
  return (
    <Movie></Movie>
  );
}

export default App;