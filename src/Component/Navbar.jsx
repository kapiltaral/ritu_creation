import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import RituIcon from './RituIcon'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-dark navbar-dark p-3">
        <div className="container-fluid">
          <RituIcon/>
          <Link className="navbar-brand m-1" to="/"> RITU CREATION</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">ABOUT US</Link>
              </li>
              <li className="nav-item dropdown ">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  OUR PRODUCTS / SERVICES
                </Link>
                <ul className="dropdown-menu bg-dark">
                  <li><NavLink className="dropdown-item bg-dark" to="#">Product</NavLink></li>
                  <li><hr className="dropdown-divider bg-secondary" /></li>
                  <li><NavLink className="dropdown-item bg-dark" to="#">Another Product</NavLink></li>
                  <li><hr className="dropdown-divider bg-secondary" /></li>
                  <li><NavLink className="dropdown-item bg-dark" to="#">Something else here</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
