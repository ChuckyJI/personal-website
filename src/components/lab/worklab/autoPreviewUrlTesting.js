import React from "react";
import { faJs, faPython } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import previewURL1 from "../../../static/images/lab/worklab/previewURL1.png";
import previewURL2 from "../../../static/images/lab/worklab/previewURL2.png";

function autoPreviewUrlTesting() {
  return (
    <div>
      <div style={{ margin: "50px 0" }}></div>
      <div>
        <div
          id="lab"
          style={{ padding: "20px", fontWeight: "bold" }}
          className="bg-info-subtle lead"
        >
          Auto-Preview URL Testing
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
                Background: This project inherits from the Ad Units Generation
                with the help of Puppeteer. It sets up a connection with Google
                Ad Manager using Puppeteer, generates a preview URL for the
                campaign, and takes a screenshot of the target website
                simultaneously. This makes it much easier for the staff to check
                the advertisement on the website and share the information with
                the campaign team.
              </h6>
              <p class="card-text" style={{ lineHeight: 2 }}>
                Step 1: Input the CreativeId and lineItemId to be tested in GAM,
                along with the website for testing.
                <br />
                Step 2: Waiting for the testing and check the screenshot folder.{" "}
                <br />
                Step 3: Typically, there are three files: one showing its
                display on the testing website, one capturing the campaign
                website after clicking the ad. The last picture includes a
                screenshot of the campaign redirect link, and one is the txt
                file showing both the Preview URL link and target redirect URL
                link. <br />
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
              </div>
              <img src={previewURL1} alt="" style={{ width: "100%" }} />
              <div style={{ padding: "0 20px" }}></div>
              <div className="head mt-3 mb-3" style={{ fontWeight: "bold" }}>
                Expected Output:
              </div>
              <img src={previewURL2} alt="" style={{ width: "20%" }} />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default autoPreviewUrlTesting;
