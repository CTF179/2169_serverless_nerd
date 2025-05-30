import React from "react";
import { Link } from "react-router-dom";

function NavBarComponent() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lists">
                  Lists
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/props">
                  Props
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="/state">
                  State
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="/effect">
                  Effect
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="/poke">
                  Poke
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBarComponent;
