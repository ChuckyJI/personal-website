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
