import * as React from 'react'
import { useState, useEffect } from 'react'
import { chakra, Button, SimpleGrid, InputLeftAddon, Input, InputGroup } from '@chakra-ui/react'
import { MovieThumb } from '../Components/MovieComp'
import { useGlobalContext } from '../Contexts/contextAPI'

export default function Movie() {

  const [SearchQuery, setSearchQuery] = useState('')
  const [MovieList, setMovieList] = useState([])

  // async function getmovies(api = 'https://api.themoviedb.org/3/movie/popular?api_key=b24785488c1326b9c4442d7325d37724&language=en-US&page=1') {
  //   const response = await fetch(api).then(e => e.json())
  //   setMovieList(response.results)
  //   console.log(response.results)
  //   return response
  // }

  // async function SearchMovie(str) {
  //   if (str) {
  //     const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=b24785488c1326b9c4442d7325d37724&language=en-US&query=' + str + '&page=1&include_adult=false').then(e => e.json())
  //     setMovieList(response.results)
  //     // console.log(response.results)
  //     return response
  //   } else {
  //     getmovies()
  //   }
  // }
  // // getmovies('https://api.themoviedb.org/3/collection/86311?api_key=b24785488c1326b9c4442d7325d37724&language=en-US')
  // // getmovies()

  // useEffect(() => {
  //   SearchMovie('')
  // }, []);

  // // const Name = useContext(AppContext)
  const { Movies } = useGlobalContext()

  return (
    <SimpleGrid columns={[2, 3, 9]} spacing='1px'>
      {Movies.map((elem) => <MovieThumb Poster={'https://image.tmdb.org/t/p/original' + elem.poster_path} Title={elem.original_title} />)}
    </SimpleGrid>
  );
}