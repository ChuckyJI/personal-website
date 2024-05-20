import React from "react";
import {
  faPython,
  faReact,
  faJs,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import adproject1 from "../../../static/images/lab/mllab/adproject1.png";
import adproject2 from "../../../static/images/lab/mllab/adproject2.png";
import adproject3 from "../../../static/images/lab/mllab/adproject3.png";
import adproject4 from "../../../static/images/lab/mllab/adproject4.png";
import adproject5 from "../../../static/images/lab/mllab/adproject5.png";
import adproject6 from "../../../static/images/lab/mllab/adproject6.png";

function adProject() {
  return (
    <div>
      <div style={{ margin: "50px 0" }}></div>
      <div>
        <div
          id="lab"
          style={{ padding: "20px", fontWeight: "bold" }}
          className="bg-info-subtle lead"
        >
          Heart Disease Prediction
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
                  icon={faReact}
                  size="3x"
                  style={{ margin: "0 20px" }}
                />
                <FontAwesomeIcon
                  icon={faJs}
                  size="3x"
                  style={{ margin: "0 20px" }}
                />
              </h5>
              <h5>Difficulty: 6/10</h5>
              <h6
                class="card-subtitle mb-2 mt-2 text-body-secondary"
                style={{ fontWeight: "bold", lineHeight: 2 }}
              >
                Background:This project is part of my final project at NUS. I am
                responsible for the machine learning component. When a doctor
                sends me patient data (the amount of which is unknown).I will
                use it to calculate the probability of those patients developing
                heart disease. My training data consists of five public heart
                disease datasets. I have set up seven different models for the
                user to choose from, each with customizable parameters. Once the
                setup is complete, users can check the results and continue
                training the models as needed. Additionally, I have included an
                "industry-used" feature to automate the selection of the best
                parameter portfolio for each model.
              </h6>
              <p class="card-text" style={{ lineHeight: 2 }}>
                Step 1: Redirect from the login system (not the part in this
                code)
                <br />
                Step 2: Load the data from the doctor side. Then choose the data
                to be trained. <br />
                Step 3: Choose the best datasets from the system (will be
                recommended to the users). <br />
                Step 4: Choose the model the users want to train. <br />
                Step 5: Train the model and check the results. <br />
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
                    href="https://github.com/ChuckyJI/ReactPython_Project"
                    style={{ marginRight: "20px" }}
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2x"
                      style={{ margin: "0 20px" }}
                    />
                    (Frontend)
                  </a>

                  <a
                    className="btn btn-primary"
                    href="https://github.com/ChuckyJI/PythonReact_Project"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2x"
                      style={{ margin: "0 20px" }}
                    />
                    (Backend)
                  </a>
                </div>
              </div>

              <hr />
              <div style={{ padding: "0 20px" }}></div>
              <div className="head mt-3 mb-3" style={{ fontWeight: "bold" }}>
                Screenshot:
              </div>
              <img src={adproject1} alt="" style={{ width: "60%" }} />
              <img src={adproject2} alt="" style={{ width: "60%" }} />
              <img src={adproject3} alt="" style={{ width: "60%" }} />
              <img src={adproject4} alt="" style={{ width: "60%" }} />
              <img src={adproject5} alt="" style={{ width: "60%" }} />
              <img src={adproject6} alt="" style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default adProject;
