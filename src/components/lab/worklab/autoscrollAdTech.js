import React from "react";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import pupeteer1 from "../../../static/images/lab/worklab/pupeteer1.png";
import pupeteer2 from "../../../static/images/lab/worklab/pupeteer2.png";
import pupeteer3 from "../../../static/images/lab/worklab/pupeteer3.png";

function autoScroolAds() {
  return (
    <div>
      <div style={{ margin: "50px 0" }}></div>
      <div>
        <div
          id="lab"
          style={{ padding: "20px", fontWeight: "bold" }}
          className="bg-info-subtle lead"
        >
          Auto-Scroll Ad Testing
        </div>
        <div className="container-md d-lg-block d-none mt-5">
          <div class="card">
            <div class="card-body" style={{ textAlign: "left" }}>
              <h5 class="card-title">
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
                Background: This project use Puppeteer to generate testing
                report in Advertisement within the public website which use the
                Google Ads System. It supports the desktop testing and mobile
                views, based on the output of the testing report, we can improve
                the advertisement quality and the user experience, at the same
                time we will know either which ad is displayed in the website
                and which is not or which format of one ad is displayed normally
                in the website.
              </h6>
              <p class="card-text" style={{ lineHeight: 2 }}>
                Step 1: Input the Testing URL inside the Input Area.
                <br />
                Step 2: Input the devices where you wanna test (desktop or
                mobile). <br />
                Step 3: Check the csv output files, inside there will be plenty
                of parameters in one advertisement It the size of DIV is not
                equals to the side of Iframe tag, it means there will be a
                problem in this advertisement. <br />
                Step 4: Based on the problem one, you can check the screenshot
                folder, and know the where the problems are. <br />
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
                    />
                  </form>
                </div>
              </div>
              <hr />
              <div className="head mt-3 mb-3" style={{ fontWeight: "bold" }}>
                Example Input:
                <img src={pupeteer1} alt="" style={{ width: "100%" }} />
              </div>
              <div style={{ padding: "0 20px" }}></div>
              <div className="head mt-3 mb-3" style={{ fontWeight: "bold" }}>
                Expected Output:
              </div>
              Report:
              <img src={pupeteer2} alt="" style={{ width: "100%" }} />
              ScreenShot:
              <br />
              <img src={pupeteer3} alt="" style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default autoScroolAds;
