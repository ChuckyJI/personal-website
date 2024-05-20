import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { label } from "../../utils/constants";

function lab() {
  return (
    <div style={{ backgroundColor: "rgba(0,222,222,0.2)" }}>
      <div id="lab" style={{ padding: "20px" }}></div>
      <div className="display-4" style={{ margin: "20px" }}>
        Laboratory
      </div>
      <div style={{ margin: "5px 0px" }}>
        (Project details are only available on desktop.)
      </div>
      <div style={{ minHeight: "400px", height: "auto" }}>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          style={{ justifyContent: "center" }}
        >
          <Tab eventKey="home" title="Machine Learning Lab">
            <div style={{ margin: "10px" }}></div>
            {label(
              "adProject",
              "Heart Disease Prediction",
              "Python, React, Flask, TensorFlow",
              6,
              "This project is part of my final project at NUS. I am responsible for the machine learning component. When a doctor sends me patient data (the amount of which is unknown).I will use it to calculate the probability of those patients developing heart disease. My training data consists of five public heart disease datasets. I have set up seven different models for the user to choose from, each with customizable parameters. Once the user has selected a model, they can input patient data and receive a prediction of the probability of heart disease.",
              "/lab/mllab/adProject"
            )}
          </Tab>
          <Tab eventKey="profile" title="Work / Study Lab">
            <div style={{ margin: "10px" }}></div>
            {label(
              "adunit",
              "Ad Units Generation",
              "Python, AWS, JavaScript",
              2,
              "In Google Ad Manager, whenever a new website is added, we need to include all ad units for each website according to Google Ads rules. This makes it easier for us to manage and track ad impressions.",
              "/lab/worklab/adunit"
            )}
            {label(
              "autoscrollAdTech",
              "Auto-Scroll Ad Testing",
              "JavaScript (Puppeteer) ",
              6,
              "This project use Puppeteer to generate testing report in Advertisement within the public website which use the Google Ads System. It supports the desktop testing and mobile views, based on the output of the testing report, we can improve the advertisement quality and the user experience, at the same time we will know either which ad is displayed in the website and which is not or which format of one ad is displayed normally in the website.",
              "/lab/worklab/autoscrollAdTech"
            )}
            {label(
              "autoPreviewUrlTesting",
              "Auto-Preview URL Testing",
              "JavaScript (Puppeteer)",
              3,
              "This project inherits from the Ad Units Generation with the help of Puppeteer. It sets up a connection with Google Ad Manager using Puppeteer, generates a preview URL for the campaign, and takes a screenshot of the target website simultaneously. This makes it much easier for the staff to check the advertisement on the website and share the information with the campaign team.",
              "/lab/worklab/autoPreviewUrlTesting"
            )}
            {label(
              "AndroidMatchGame",
              "Android Match Game",
              "Java, Android Studio",
              5,
              "This is my Android Match Game project from NUS. In this game, you find a website and fetch 20 images from it, then choose 6 of them to start the game. The game can be played by 1 player for fun or 2 players to compete. During the game, a player selects 2 images to match. If the images match, the player earns a point. If they don’t match, the images are hidden and the next player takes their turn. The player with the most points at the end wins.",
              "/lab/worklab/AndroidMatchGame"
            )}
          </Tab>
          <Tab eventKey="contact" title="Discovery Lab">
            <div style={{ margin: "10px" }}></div>
            {label(
              "presignUrl",
              "AWS S3 PresignedURL",
              "Python, AWS, JavaScript",
              4,
              "This project is to generate a presigned URL from the frontend to access a private S3 bucket. The presigned URL is a temporary URL that grants access to a private S3 bucket for a limited time, which will be used to upload files. It is a practice project before put it into production.",
              "/lab/discoverylab/s3Presignurl"
            )}
          </Tab>
        </Tabs>
      </div>
      <hr />
    </div>
  );
}

export default lab;
