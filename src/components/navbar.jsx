import { BsCameraVideoFill, BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#121212' }} className="navbar">
      <Link to="/" target="_self">
        <div className="d-flex ms-1 logoHover pt-1 ">
          <BsCameraVideoFill className="fs-1" />
          <div style={{ lineHeight: '2px' }} className="pt-sm-1 pt-lg-2 ms-1 ">
            <p className="fst-italic">movie</p>
            <p className="fw-bolder">TMDB</p>
          </div>
        </div>
      </Link>

      <form style={{ width: '240px', height: '35px' }} className="d-flex me-2">
        <input
          type="text"
          placeholder="search"
          style={{ fontSize: '0.9rem' }}
          className="form-control me-2 fst-italic"
        />
        <button className="btn btn-outline-warning d-flex justify-content-center align-items-center">
          <BsSearch />
        </button>
      </form>
    </nav>
  )
}

export default Navbar
