import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const imgApi = import.meta.env.VITE_IMG

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div style={{ backgroundColor: '#121212' }} className="p-3">
      <img
        className="w-100"
        src={imgApi + movie.poster_path}
        alt={movie.title}
      />

        <h2 className="fs-6 py-2"> {movie.title} </h2>

        <p className="py-2 d-flex align-items-center ">
          <FaStar style={{ color: '#ffc107' }} className="fs-4 me-2" />
          <span className="fs-6">{movie.vote_average}</span>
        </p>

        {showLink && (
          <Link
            to={`/movie/${movie.id}`}
            target="_self"
            className="btnDetails text-uppercase fw-bold text-center py-3 rounded-1"
          >
            details
          </Link>
        )}
    </div>
  )
}

export default MovieCard
