import React, { useContext, useState, useEffect } from 'react'

const OMDB_API_URL = 'https://www.omdbapi.com/?apikey=727bbdc1&s=iron man'
const TMDB_API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=b24785488c1326b9c4442d7325d37724'

const AppContext = React.createContext()

// We Need to create Provider
const AppProvider = ({ children }) => {

  const [IsLoading, setIsLoading] = useState(true)
  const [Movies, setMovies] = useState([])
  const [isError, setIsError] = useState({ show: 'false', msg: '' })
  const [SearchQuery, setSearchQuery] = useState('Doctor Strange')
  const [SearchResults, setSearchResults] = useState({Movies: [], Series: [],})
  const [WatchProviders, setWatchProviders] = useState({})

  const SearchContent = async (q) => {
    // do stuf
    const Result = {Movies: [], Series: [],}
    // const TempContent = []
    try {
      const resp = await fetch('https://api.themoviedb.org/3/search/movie?api_key=b24785488c1326b9c4442d7325d37724&language=en-US&query=' + q + '&page=1&include_adult=false')
      const data = await resp.json()
      Result.Movies = data.results
      console.log(data)
    } catch (error) {
      console.log(error)
    }

    try {
      const resp = await fetch('https://api.themoviedb.org/3/search/tv?api_key=b24785488c1326b9c4442d7325d37724&language=en-US&page=1&query=' + q + '&include_adult=false')
      const data = await resp.json()
      Result.Series = data.results
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    // Array.prototype.push.apply(TempContent, SearchResult.Series)
    // Array.prototype.push.apply(TempContent, SearchResult.Movies)
    // setMovies(TempContent)
    setSearchResults(Result)
    console.log('Search Result: ', SearchResults)
  }

  const getWatchProviders = async (id='634649') => {
    try {
      const resp = await fetch('https://api.themoviedb.org/3/movie/' + '634649' + '/watch/providers?api_key=b24785488c1326b9c4442d7325d37724')
      const data = await resp.json()
      setWatchProviders(data.results.IN.flatrate)
      console.log('Watch Providers', WatchProviders.results.IN.flatrate)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // let timerOut = setTimeout(() => { getMovies(`${TMDB_API_URL}&language=en-US&query=${SearchQuery}&page=1&include_adult=false`) }, 500)
    let timerOut = setTimeout(() => {SearchContent(SearchQuery)}, 500)
    return () => clearTimeout(timerOut)
  }, [SearchQuery])

  return (
    <AppContext.Provider value={{ IsLoading, isError, Movies, WatchProviders, SearchResults, SearchQuery, setSearchQuery }}>
      {children}
    </AppContext.Provider>
  )
}

//Global custom hooks
const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }