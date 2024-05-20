import React from "react";
import {
  faPython,
  faAws,
  faJs,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import presignedURL2 from "../../../static/images/lab/discoverylab/presignUrls3.png";

function presignedURL() {
  return (
    <div>
      <div style={{ margin: "50px 0" }}></div>
      <div>
        <div
          id="lab"
          style={{ padding: "20px", fontWeight: "bold" }}
          className="bg-info-subtle lead"
        >
          AWS S3 PresignedURL Generation
        </div>
        <div className="container-md d-lg-block d-none mt-5">
          <div class="card">
            <div class="card-body" style={{ textAlign: "left" }}>
              <h5 class="card-title">
                <FontAwesomeIcon
                  icon={faPython}
                  size="3x"
                  style={{ margin: "0 20px" }}
                />
                <FontAwesomeIcon
                  icon={faAws}
                  size="3x"
                  style={{ margin: "0 20px" }}
                />
                <FontAwesomeIcon
                  icon={faJs}
                  size="3x"
                  style={{ margin: "0 20px" }}
                />
              </h5>
              <h5>Difficulty: 4/10</h5>
              <h6
                class="card-subtitle mb-2 mt-2 text-body-secondary"
                style={{ fontWeight: "bold", lineHeight: 2 }}
              >
                Background: This project is to generate a presigned URL from the
                frontend to access a private S3 bucket. The presigned URL is a
                temporary URL that grants access to a private S3 bucket for a
                limited time, which will be used to upload files. It is a
                practice project before put it into production.
              </h6>
              <p class="card-text" style={{ lineHeight: 2 }}>
                Step 1: Click the button for uploading.
                <br />
                Step 2: Waiting for the uploading until it finished. <br />
                Step 3: Can check the time when uploading. <br />
              </p>

              <div className="card">
                <div className="card-body">
                  <div
                    className="head mt-3 mb-3"
                    style={{ fontWeight: "bold" }}
                  >
                    Welcome to the Lab:
                  </div>
                  <a
                    className="btn btn-primary"
                    href="https://github.com/ChuckyJI/S3_Presigned_URL"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2x"
                      style={{ margin: "0 20px" }}
                    />
                  </a>
                </div>
              </div>

              <hr />
              <div style={{ padding: "0 20px" }}></div>
              <div className="head mt-3 mb-3" style={{ fontWeight: "bold" }}>
                High Level architectural design:
              </div>
              <img src={presignedURL2} alt="" style={{ width: "100%" }} />
              <span>
                Due to the business secret, I can only share with the step 1 - 2
                to the public.
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default presignedURL;
