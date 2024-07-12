import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import MovieCard from '../components/movieCard'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import './movieGrid.css'

const Search = () => {
  //useSearchParams manda um array, ele deve ser desestruturado com colchetes e sem chaves
  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  const query = searchParams.get('q')

  const getSearchedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovies(data.results)
  }
  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`

    getSearchedMovies(searchWithQueryURL)
  }, [query])

  return (
    <div className="container">
      <h2 className="p-2 mt-3 fs-5">
        Results for:
        <span style={{ color: '#ffc107' }} className="text-uppercase ms-2">
          {query}
        </span>
      </h2>

      <div className="movies-container">
        {movies.length === 0 && <p> Loading... </p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}
export default Search
