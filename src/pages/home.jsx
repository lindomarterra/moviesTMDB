import { useEffect, useState } from 'react'
import MovieCard from '../components/movieCard'

const apiUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
  const [movies, setMovies] = useState([])

  const getRatedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setMovies(data.results)
  }

  useEffect(() => {
    const getUrlApi = ` ${apiUrl}top_rated?${apiKey} `
    getRatedMovies(getUrlApi)
  }, [])

  return (
    <div className="container py-5 ">
      {movies.length === 0 && <p className="fs-5 pt-5 pb-3"> Loading...</p>}

      {movies.length > 0 && <h1 className="fs-5 pt-5 pb-3"> Rated movies </h1>}

      <div
        style={{ backgroundColor: 'transparent' }}
        className="row g-3 d-flex justify-content-between flex-wrap"
      >
        {movies.length > 0 &&
          movies.map((movie) => (
            <div key={movie.id} className="col-lg-6 col-xl-4">
              <MovieCard key={movie.id} movie={movie} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default Home
