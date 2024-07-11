import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieCard from '../components/movieCard'

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from 'react-icons/bs'

const movieUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Movie = () => {
  const [movie, setMovie] = useState(null)
  const { id } = useParams()

  const getMovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setMovie(data)
  }

  const formatCurrency= (number) =>{
    return number.toLocaleString("en-US", {
      style: 'currency',
      currency: 'USD'
    } )

  }

  useEffect(() => {
    const getUrlMovie = `${movieUrl}${id}?${apiKey}`
    getMovie(getUrlMovie)
  }, [])

  return (
    <div className="container pt-5">
      <div className="row pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          {movie && (
            <>
              <MovieCard movie={movie} showLink={false} />
              <h5 className="py-3"> {movie.tagline} </h5>

              <div>
                <p className="d-flex align-items-center">
                  <BsWallet2
                    style={{ color: '#ffc107' }}
                    className="fs-3 me-2"
                  />{' '}
                  Budget:
                </p>
                <p> {formatCurrency(movie.budget)} </p>
              </div>
              <div>
                <p className="d-flex align-items-center">
                  <BsGraphUp
                    style={{ color: '#ffc107' }}
                    className="fs-3 me-2"
                  />{' '}
                  Revenue:
                </p>
                <p> {formatCurrency(movie.revenue)} </p>
              </div>
              <div>
                <p className="d-flex align-items-center">
                  <BsHourglassSplit
                    style={{ color: '#ffc107' }}
                    className="fs-3 me-2"
                  />{' '}
                  Runtime:
                </p>
                <p> {movie.runtime} minuts </p>
              </div>
              <div>
                <p className="d-flex align-items-center">
                  <BsFillFileEarmarkTextFill
                    style={{ color: '#ffc107' }}
                    className="fs-3 me-2"
                  />{' '}
                  Description:
                </p>
                <p className='lh-lg'> {movie.overview} </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Movie
