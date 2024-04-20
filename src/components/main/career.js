import React from "react";
import Mediacorp from "../../static/images/mediacorp.png";
import nus from "../../static/images/nus.png";
import ruc from "../../static/images/ruc.png";
import allpku from "../../static/images/allpku.png";
import zufe from "../../static/images/zufe.png";

import list1 from "../../static/images/case/list1.png";
import list2 from "../../static/images/case/list2.png";
import list3 from "../../static/images/case/list3.png";

import {
  faPython,
  faJs,
  faAws,
  faMicrosoft,
  faNodeJs,
  faReact,
  faJava,
  faLinux,
  faWordpress,
  faKaggle,
  faPhp,
  faAndroid,
  faDocker,
  faRProject,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconStyle = {
  margin: "20px 10px",
};

const iconDisplay = (icon) => {
  return <FontAwesomeIcon icon={icon} size="2x" style={iconStyle} />;
};

function career() {
  return (
    <div>
      <div id="career" style={{ padding: "30px" }}></div>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-lg-10">
            <div className="display-4">Career</div>
            <p
              style={{
                textAlign: "left",
                fontSize: "1rem",
                color: "grey",
                lineHeight: 2,
                fontFamily: "Verdana",
              }}
            >
              Hello, I am Chucky JI. My Japanese name is Chucky Kazamatsuri. I
              am an AI Full-stack Engineer. I used to be the senior partner with
              over 9 years of experience in Management consulting. I specialize
              in 4 years of digital transformation and 5 years of data science.
              Additionally, I have 2 years of experience in AI development. I
              excel at producing results in high-intensity situations and am
              always willing to share my knowledge. Being a good communicator
              and researcher is integral to my work.
            </p>
          </div>

          <div className="col"></div>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-1 d-none d-lg-block">
            <div
              className="list-group"
              style={{ position: "sticky", top: "20%" }}
            >
              <a
                className="list-group-item list-group-item-action"
                href="#year2024"
              >
                2024
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#year2023"
              >
                2023
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#year2022"
              >
                2022
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#year2021"
              >
                2021
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#year2020"
              >
                2020
              </a>
            </div>
          </div>
          <div className="col-lg-11 col-sm-12">
            <div
              data-bs-smooth-scroll="true"
              className="scrollspy-example"
              tabindex="0"
            >
              <h4
                id="year2024"
                style={{
                  margin: "0 0 20px 0",
                  fontWeight: "bold",
                }}
              >
                2024
              </h4>
              <div className="row">
                <div className="col-md-6 col-sm-12 d-flex flex-column align-items-center">
                  <img src={Mediacorp} alt="" />
                  <div className="lead text-center">
                    Mediacorp PTE Ltds. <br />
                    AI Full-stack Engineer & Ad Tech Specialist
                  </div>
                  <div className="d-flex justify-content-center">
                    {iconDisplay(faPython)}
                    {iconDisplay(faAws)}
                    {iconDisplay(faJs)}
                    {iconDisplay(faMicrosoft)}
                    {iconDisplay(faNodeJs)}
                    {iconDisplay(faReact)}
                    {iconDisplay(faDocker)}
                  </div>
                </div>
                <div
                  className="col-md-6 d-none d-lg-block d-md-flex flex-column align-items-center  bg-dark-subtle"
                  style={{
                    textAlign: "left",
                    lineHeight: 2,
                    justifyContent: "center",
                  }}
                >
                  - Automized 2 Ads Dept. processes, reducing 70% more time and
                  cost
                  <br />
                  - Contributed to 6 internal AI application programming
                  projects
                  <br />
                  - Participated in 3 research initiatives focusing on the
                  latest skills and models
                  <br />- Collaborated with the team on launching new features
                  for internal tool.
                </div>
              </div>

              <h4
                id="year2023"
                style={{
                  margin: "20px 0 20px 0",
                  fontWeight: "bold",
                }}
              >
                2023
              </h4>

              <div className="row">
                <div
                  className="col-md-6 d-none d-lg-block d-md-flex flex-column align-items-center  bg-dark-subtle"
                  style={{
                    textAlign: "left",
                    lineHeight: 2,
                    justifyContent: "center",
                  }}
                >
                  NUS Relevant Courses: <br />
                  - Software Analysis and Design <br />
                  - Machine Learning <br />
                  - Web Application Development <br />
                  - Mobile Application Development <br />
                  Training: <br />
                  - (AWS) Practical Data Science with Amazon SageMaker <br />
                  - (AWS) Building Batch Data Analytics Solutions on AWS
                  <br />
                  Kaggle: <br />
                  [BRONZE] LLM Science Exam: Use LLMs to answer difficult
                  science questions
                </div>
                <div className="col-md-6 col-sm-12 d-flex flex-column align-items-center">
                  <img src={Mediacorp} alt="" />
                  <div className="lead">
                    Mediacorp PTE Ltds. <br />
                    AI Full-stack Engineer
                  </div>
                  <div>
                    {iconDisplay(faPython)}
                    {iconDisplay(faAws)}
                    {iconDisplay(faReact)}
                    {iconDisplay(faWordpress)}
                    {iconDisplay(faPhp)}
                    {iconDisplay(faDocker)}
                  </div>
                  <br />
                  <img src={nus} alt="" />
                  <div className="lead">System Analysis (Graduate Diploma)</div>
                  <div>
                    {iconDisplay(faPython)}
                    {iconDisplay(faJava)}
                    {iconDisplay(faReact)}
                    {iconDisplay(faAndroid)}
                    {iconDisplay(faKaggle)}
                    {iconDisplay(faLinux)}
                  </div>
                </div>
              </div>

              <h4
                id="year2022"
                style={{
                  margin: "20px 0 20px 0",
                  fontWeight: "bold",
                }}
              >
                2022
              </h4>
              <div className="row">
                <div className="col-md-6 col-sm-12 d-lg-flex flex-column align-items-center">
                  <img src={allpku} alt="" style={{ width: "20%" }} />
                  <div className="lead text-center">
                    Alliance PKU Management Consultants LTD. <br />
                    Senior Partner, General Manager of IT Industry Center,
                    <br />
                  </div>
                  <div className="d-flex justify-content-center">
                    {iconDisplay(faPython)}
                    {iconDisplay(faReact)}
                    {iconDisplay(faJs)}
                  </div>
                  <img src={ruc} alt="" style={{ width: "30%" }} />
                  <div className="lead text-center">
                    Renmin University of China <br />
                    Probability Theory and Mathematical Statistics
                    <br />
                    Master of Science in Statistics
                    <br />
                  </div>
                  <div className="d-flex justify-content-center">
                    {iconDisplay(faPython)}
                    {iconDisplay(faRProject)}
                    {iconDisplay(faJs)}
                  </div>
                </div>
                <div
                  className="col-md-6 d-none d-lg-block d-md-flex flex-column align-items-center  bg-dark-subtle"
                  style={{
                    textAlign: "left",
                    lineHeight: 2,
                    justifyContent: "center",
                  }}
                >
                  - Led a team of 12 consultants in IT Industry Center <br />
                  - Engaged in 513 business negotiations and project
                  communications <br />
                  - Dedicated and accomplished 45 consulting projects <br />
                  - Contributed to a total contract value of CNY 13.5 million
                  <br />
                </div>
              </div>

              <h4
                id="year2021"
                style={{
                  margin: "20px 0 20px 0",
                  fontWeight: "bold",
                }}
              >
                2021
              </h4>
              <div className="row">
                <div
                  className="col-md-6 d-none d-lg-block d-md-flex flex-column align-items-center  bg-dark-subtle"
                  style={{
                    textAlign: "left",
                    lineHeight: 2,
                    justifyContent: "center",
                  }}
                >
                  - Certified Management Consultant (International Council of
                  Management Consulting Institutes) <br />
                  - Individual Outstanding Contribution Award (Ministry of
                  Industry and Information Technology)(Total number in China in
                  2021: 49 ppl) <br />- National SME management consulting
                  expert (Ministry of Industry and Information Technology)
                </div>
                <div className="col-md-6 col-sm-12 d-flex flex-column align-items-center">
                  <img src={allpku} alt="" style={{ width: "20%" }} />
                  <div className="lead text-center">
                    Alliance PKU Management Consultants LTD. <br />
                    Senior Partner, General Manager of IT Industry Center,
                  </div>
                  <div className="d-flex justify-content-center">
                    {iconDisplay(faPython)}
                    {iconDisplay(faReact)}
                    {iconDisplay(faJs)}
                  </div>
                  <br />
                  <img src={zufe} alt="" style={{ width: "30%" }} />
                  <div className="lead">
                    Zhejiang University of Finance and Economics
                    <br />
                    School of Data Science <br />
                    Full-time Student Tutor (2021-2025)
                    <br />
                  </div>
                  <div>
                    {iconDisplay(faPython)}
                    {iconDisplay(faJs)}
                    {iconDisplay(faKaggle)}
                  </div>
                </div>
                <h4
                  id="year2020"
                  style={{
                    margin: "20px 0 20px 0",
                    fontWeight: "bold",
                  }}
                >
                  ~ 2020
                </h4>
                <div>
                  <div className="col d-flex flex-column align-items-center">
                    <img src={allpku} alt="" style={{ width: "10%" }} />
                    <div className="lead text-center">
                      Alliance PKU Management Consultants LTD. <br />
                      Senior Partner, General Manager of IT Industry Center,
                    </div>
                    <div className="d-flex justify-content-center">
                      {iconDisplay(faPython)}
                      {iconDisplay(faReact)}
                      {iconDisplay(faJs)}
                    </div>
                    <div
                      className="d-flex justify-content-center"
                      style={{ fontSize: "1rem", fontWeight: "bold" }}
                    >
                      Digital transformation Cases (Exclude traditional cases)
                    </div>
                  </div>
                  <div
                    id="carouselExampleAutoplaying"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={list1}
                          alt="..."
                          style={{ width: "80%", height: "100%" }}
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={list2}
                          alt="..."
                          style={{ width: "80%", height: "100%" }}
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={list3}
                          alt="..."
                          style={{ width: "80%", height: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default career;
