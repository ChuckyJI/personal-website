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
                Background: In Google Ad Manager, whenever a new website is
                added, we need to include all ad units for each website
                according to Google Ads rules. This makes it easier for us to
                manage and track ad impressions.
              </h6>
              <p class="card-text" style={{ lineHeight: 2 }}>
                Step 1: Enter the complete path for each Google Ads unit.
                <br />
                Step 2: Put each path on a new line, without any commas or
                "setIsOpen" commands. <br />
                Step 3: Click the button to generate the ad units. <br />
                Step 4: Wait for the download to finish. <br />
                Step 5: Review the output and upload it to Google Ad Manager.
              </p>

              <div className="card">
                <div className="card-body">
                  <div
                    className="head mt-3 mb-3"
                    style={{ fontWeight: "bold" }}
                  >
                    Welcome to the Lab (Sorry, Online Testing Function Not
                    Available Now):
                  </div>
                  <form>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Path"
                      disabled
                    />
                    <input
                      type="button"
                      class="btn btn-primary mt-2"
                      value="Generate"
                      omClick={() => alert("Generating...")}
                      disabled
                    />
                  </form>
                </div>
              </div>

              <hr />
              <div className="head mt-3 mb-3" style={{ fontWeight: "bold" }}>
                Example Input:
              </div>
              <div style={{ padding: "0 20px" }}>
                cna_dweb/imu2/singapore/landingpage/na <br />
                cna_dweb/imu3/singapore/landingpage/na
                <br />
                cna_mweb/imu1/asia/articlepage/na
                <br />
                cna_mweb/side2/asia/articlepage/na
                <br />
                cna_mweb/imu1/singapore/landingpage/na
                <br />
                cna_mweb/imu2/singapore/landingpage/na
                <br />
                mothership_desktop/article/na/na/lb1
                <br />
                mothership_mobileweb/article/na/na/lb1
                <br />
                espn_desktop/frontPage/oop
                <br />
              </div>
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
