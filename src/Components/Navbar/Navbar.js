import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import '../../App.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container mb-4">
        <Link to="/" className="fs-3 ubuntu navbar-brand">
          Rick & Morty <span className="text-primary">WiKi</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style jsx>
            {`
              button[aria-expanded="false"] > .x {
                display: none;
              }

              button[aria-expanded="true"] > .y {
                display: none;
              }
            `}
          </style>

          <i class="fa-solid fa-bars y fw-bold text-dark"></i>
          <i class="fa-solid fa-xmark x fw-bold text-dark"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav fs-5">
            <NavLink activeClassName="active" to="/" className="nav-link">
              Characters
            </NavLink>
            <NavLink to="/episode" className="nav-link">
              Episodes
            </NavLink>
            <NavLink to="/location" className="nav-link">
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar