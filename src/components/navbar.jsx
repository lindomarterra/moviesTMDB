import { useState } from 'react'
import { BsCameraVideoFill, BsSearch } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [search, setSearch]= useState('')
  const navegate= useNavigate()

  const handleSubmit= (e)=>{
    e.preventDefault()

    if(!search) return 
    navegate(`/search?q=${search}`)
    setSearch('')
  }

  return (
    <nav style={{ backgroundColor: '#121212' }} className="navbar position-fixed w-100">
      <Link to="/" target="_self">
        <div className="d-flex ms-1 logoHover pt-1 ">
          <BsCameraVideoFill className="fs-1" />
          <div style={{ lineHeight: '2px' }} className="pt-sm-1 pt-lg-2 ms-1 ">
            <p className="fst-italic">movie</p>
            <p className="fw-bolder">TMDB</p>
          </div>
        </div>
      </Link>

      <form onSubmit={handleSubmit}  style={{ width: '240px', height: '35px' }} className="d-flex me-2">
        <input
          onChange={(e)=> setSearch(e.target.value)}
          value={search}
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
