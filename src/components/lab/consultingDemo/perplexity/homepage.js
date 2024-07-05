import React from "react";
import { faPython, faNodeJs, faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import userGuide1 from "../../../../static/images/lab/consultingLab/perplexity/userGuide1.png";
import userGuide2 from "../../../../static/images/lab/consultingLab/perplexity/userGuide2.png";
import userGuide3 from "../../../../static/images/lab/consultingLab/perplexity/userGuide3.png";

function MimicPerplexity() {
  return (
    <div>
      <div style={{ margin: "50px 0" }}></div>
      <div>
        <div
          id="lab"
          style={{ padding: "20px", fontWeight: "bold" }}
          className="bg-info-subtle lead"
        >
          Mimic Perplexity with Media
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
                  icon={faNodeJs}
                  size="3x"
                  style={{ margin: "0 20px" }}
                />

                <FontAwesomeIcon
                  icon={faJs}
                  size="3x"
                  style={{ margin: "0 20px" }}
                />
              </h5>
              <h5>Difficulty: 7/10</h5>
              <h6
                class="card-subtitle mb-2 mt-2 text-body-secondary"
                style={{ fontWeight: "bold", lineHeight: 2 }}
              >
                Background: The pleplexity is a good GPT tools with searching in
                the public website and generate the result based on the search
                content. My project is to mimic the perplexity with the media
                content. I choose the Mediacorp Group and Bing search engine to
                generate the result similar to Perplexity. Inside, not only I
                show the internal result in Mediaocrp from public network, but
                search the external ones from Bing as well. I use
              </h6>
              <p class="card-text" style={{ lineHeight: 2 }}>
                Step 1,2: Landing Page.
                <img src={userGuide1} alt="" style={{ width: "100%" }} />
                <br />
                Step 3, 4, 5: Searching Page.
                <img src={userGuide2} alt="" style={{ width: "100%" }} />
                <img src={userGuide3} alt="" style={{ width: "100%" }} />
                <br />
              </p>

              <div className="card">
                <div className="card-body">
                  <div
                    className="head mt-3 mb-3"
                    style={{ fontWeight: "bold" }}
                  >
                    Welcome to the Lab
                  </div>
                  <a
                    href="/lab/consultingdemo/ChurChexity"
                    className="btn btn-primary"
                  >
                    Click Me
                  </a>
                </div>
              </div>

              <hr />
              <div
                className="head mt-3 mb-3"
                style={{ fontWeight: "bold", lineHeight: "2" }}
              >
                Framework:
                <ul>
                  <li>
                    Frontend: ReactJS – Used for the design of the landing page
                    and search page.
                  </li>
                  <li>
                    Backend: NodeJS – Handles saving and deleting data based on
                    each search, looks like a small database. Data can be saved
                    locally on the user's machine or in S3.
                  </li>
                  <li>
                    Middleware: Python – Connects the frontend with the LLM,
                    processes data, chooses different APIs based on the result
                    (either normal content or a simple "hello"), and passes
                    text/event-stream data to the frontend to demonstrate the
                    stream effect.
                  </li>
                  <li>
                    LLM: Python – Uses fine-tuning to design the output
                    structure.
                  </li>
                </ul>
              </div>
              <div style={{ padding: "0 20px" }}></div>
              <div
                className="head mt-3 mb-3"
                style={{ fontWeight: "bold", lineHeight: "2" }}
              >
                Response structure (LLM):
                <ul>
                  <li>{"data: {normal result without event stream}"}</li>
                  <li>{"data: {answer: event stream 1}"}</li>
                  <li>{"data: {answer: event stream 2}"}</li>
                  <li>...</li>
                </ul>
              </div>
              <div style={{ padding: "0 20px" }}></div>
              <div
                className="head mt-3 mb-3"
                style={{ fontWeight: "bold", color: "red" }}
              >
                Warining:
                <p>
                  My website is static, so I can't run the backend and
                  middleware together. As a result, the online search function
                  doesn't work. I have to use mock data to display the frontend
                  only. I will share the code Later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default MimicPerplexity;
