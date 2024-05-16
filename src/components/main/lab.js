import React from "react";
import { Tab, Tabs } from "react-bootstrap";

function lab() {
  return (
    <div style={{ backgroundColor: "rgba(0,222,222,0.2)" }}>
      <div id="lab" style={{ padding: "20px" }}></div>
      <div className="display-4" style={{ margin: "20px" }}>
        Laboratory
      </div>
      <div style={{ height: "780px" }}>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          style={{ justifyContent: "center" }}
        >
          <Tab eventKey="home" title="Machine Learning Lab">
            <div style={{ margin: "10px" }}></div>
            TBA
          </Tab>
          <Tab eventKey="profile" title="Work Lab">
            <div style={{ margin: "10px" }}></div>
            <div className="container mt-2 mb-2">
              <div className="row">
                <div className="col-12">
                  <div
                    class="btn btn-block"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                    style={{
                      width: "100%",
                      backgroundColor: "rgba(222,222,222,0.7)",
                    }}
                  >
                    <div className="row">
                      <div className="col-4" style={{ textAlign: "left" }}>
                        Project: Ad Units Generation
                      </div>
                      <div className="col-4">Difficulty: 2/10</div>
                      <div className="col-4" style={{ textAlign: "right" }}>
                        More Details ↓{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div class="collapse" id="collapseExample">
                    <div class="card card-body" style={{ textAlign: "left" }}>
                      Background: In Google Ad Manager, whenever a new website
                      is added, we need to include all ad units for each website
                      according to Google Ads rules. This makes it easier for us
                      to manage and track ad impressions.
                      <a
                        className="btn btn-primary w-100"
                        href="/lab/worklab/adunit"
                        target="_blank"
                        style={{ width: "50px" }}
                      >
                        More ...
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="btn btn-primary"
              style={{ margin: "10px" }}
              href="/lab/worklab/adunit"
            >
              aa
            </a>
            TBA
          </Tab>
          <Tab eventKey="contact" title="Discovery Lab">
            <div style={{ margin: "10px" }}></div>
            TBA
          </Tab>
        </Tabs>
      </div>
      <hr />
    </div>
  );
}

export default lab;
