import React from "react";
import { faPython, faAws, faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import adunit1 from "../../../static/images/lab/worklab/adunit1.png";

function adUnit() {
  return (
    <div>
      <div style={{ margin: "50px 0" }}></div>
      <div>
        <div
          id="lab"
          style={{ padding: "20px", fontWeight: "bold" }}
          className="bg-info-subtle lead"
        >
          Ad Units Generation
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
              <h5>Difficulty: 2/10</h5>
              <h6
                class="card-subtitle mb-2 mt-2 text-body-secondary"
                style={{ fontWeight: "bold", lineHeight: 2 }}
              >
                Background:
              </h6>
              <p class="card-text" style={{ lineHeight: 2 }}>
                Step 1: .
                <br />
                Step 2: . <br />
                Step 3: . <br />
                Step 4: . <br />
                Step 5: .
              </p>

              <div className="card">
                <div className="card-body">
                  <div
                    className="head mt-3 mb-3"
                    style={{ fontWeight: "bold" }}
                  >
                    Welcome to the Lab:
                  </div>
                  <form>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Path"
                    />
                    <input
                      type="button"
                      class="btn btn-primary mt-2"
                      value="Generate"
                      omClick={() => alert("Generating...")}
                    />
                  </form>
                </div>
              </div>

              <hr />
              <div className="head mt-3 mb-3" style={{ fontWeight: "bold" }}>
                Example Input:
              </div>
              <div style={{ padding: "0 20px" }}></div>
              <div className="head mt-3 mb-3" style={{ fontWeight: "bold" }}>
                Expected Output:
              </div>
              <img src={adunit1} alt="" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default adUnit;
