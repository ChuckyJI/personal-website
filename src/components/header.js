import React from "react";
import "../App.css";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function Header() {
  const { t } = useTranslation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light-subtle fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {t("CHUCKY")}
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
                  {t("home")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#career">
                  {t("Career")}
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
                  {t("Laboratory")}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#lab">
                      {t("Machine Learning Lab")}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#lab">
                      {t("Work / Study Lab")}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#lab">
                      {t("Discovery Lab")}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#lab">
                      {t("Consulting Lab")}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#habit">
                  {t("Make Friends")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  {t("Contact Me")}
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
                  {t("Language")}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={() => i18n.changeLanguage("en")}
                      type="button"
                    >
                      English
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={() => i18n.changeLanguage("jp")}
                      type="button"
                    >
                      日本語
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <button
        className="to-top bg-info-subtle btn-sm"
        onClick={() => window.scrollTo(0, 0)}
      >
        {t("To Top")}
      </button>
    </div>
  );
}

export default Header;
