import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/movieCard'

const searchUrl = import.meta.env.VITE_SEARCH 
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {

  const [movies, setMovies]= useState([])
  const [ searchParams ] = useSearchParams()
  const query= searchParams.get('q')
  const newQuery= query.toUpperCase()

  const searchMovies= async (url) => {
    const res= await fetch(url)
    const data= await res.json()
    setMovies(data.results)
  }

  useEffect(()=>{
    const getSearchMovies= ` ${searchUrl}?${apiKey}&query=${query} `
    searchMovies(getSearchMovies)
  },[query])


  return (
    <div className="container py-5 ">
      {movies.length === 0 && <p className="fs-5 pt-5 pb-3" > Loading...</p>}
      {movies.length > 0 && (
        <h1 className="fs-5 pt-5 pb-3">
          Results for: <span className="fs-3">{newQuery}</span>
        </h1>
      )}

      <div className="row g-3">
        {movies.length > 0 &&
          movies.map((movie) => (
            <div key={movie.id} className="col-lg-6 col-xl-4 d-flex">
              <MovieCard key={movie.id} movie={movie} />
            </div>
          ))}
      </div>
    </div>
  )  
}

export default Search
