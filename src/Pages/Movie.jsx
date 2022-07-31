import * as React from 'react'
import { useState } from 'react'
import { Button, SimpleGrid } from '@chakra-ui/react'
import { MovieThumb } from '../Components/MovieComp'

export default function Movie() {const [MovieList, setMovieList] = useState([])

  async function getmovies(api) {
    const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=b24785488c1326b9c4442d7325d37724').then(e => e.json())
    setMovieList(response.results)
    return response
  }
  getmovies()
  
  return (
    <SimpleGrid columns={[2, null, 3]} spacing='30px'>
      {MovieList.map((elem) => <MovieThumb Poster={'https://image.tmdb.org/t/p/original' + elem.poster_path} Name={elem.poster_path} />)}
      <Button onClick={(e) => {console.log(MovieList)}}>Click</Button>
    </SimpleGrid>
  );
}