import { useEffect, useState } from 'react'
import MovieCard from '../components/movieCard'

import './movieGrid.css'

const movieURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setTopMovies(data.results)
  }

  useEffect(() => {
    const topRatedUrl = `${movieURL}top_rated?${apiKey}`

    getTopRatedMovies(topRatedUrl)
  }, [])

  return (
    <div className="container">
      <h2 className="p-2 mt-3 fs-5"> 
        Rated movies 
      </h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p> Loading... </p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Home
