// eslint-disable-next-lineimport React from "react";
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navbar-style.css";

export default function navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#e2e8f0" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            ADOPTEV
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search your Favourite EV"
              aria-label="Search"
            />
          </form>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">Finance</li>
              <li className="nav-item">Partner with Us</li>
            </ul>
            <button className="btn btn-outline-success" type="submit">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
