import React from "react";
import "../App.css";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light-subtle fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            CHUCKY
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#career">
                  Career
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#lab"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Laboratory
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#lab">
                      Machine Learning Lab
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#lab">
                      Work Lab
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#lab">
                      Discovery Lab
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#habit">
                  Make Friends
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <button
        className="to-top bg-info-subtle btn-sm"
        onClick={() => window.scrollTo(0, 0)}
      >
        To Top
      </button>
    </div>
  );
}

export default Header;
