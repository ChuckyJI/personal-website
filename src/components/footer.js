import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function footer() {
  return (
    <div>
      <div id="contact"></div>
      <div className="container-fluid bg-body-tertiary bg-primary-subtle">
        <div className="row">
          <div className="col-1 text-center"></div>
          <div className="col text-center">
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
              Contact Me
            </div>
            <div>
              <a
                href="https://github.com/ChuckyJI"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 10px 0 10px" }}
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100014372778300"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 10px 0 10px" }}
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/satotroy/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 10px 0 10px" }}
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/chucky_kazamatsuri/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: "0 10px 0 10px" }}
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
            <div style={{ lineHeight: 2 }}>Email: satotroy.ji@gmail.com</div>
            <hr />
            <div style={{ fontWeight: "bold", margin: "10px 0 10px 0" }}>
              © COPYRIGHT 2024 BY CHUCKY KAZAMATSURI.
            </div>
          </div>
          <div className="col-1 text-center"></div>
        </div>
      </div>
    </div>
  );
}

export default footer;
