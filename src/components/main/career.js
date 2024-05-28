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
import { useTranslation } from "react-i18next";

const iconStyle = {
  margin: "20px 10px",
};

const iconDisplay = (icon) => {
  return <FontAwesomeIcon icon={icon} size="2x" style={iconStyle} />;
};

function Career() {
  const { t } = useTranslation();
  return (
    <div>
      <div id="career" style={{ padding: "30px" }}></div>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-lg-10">
            <div className="display-4">{t("Career")}</div>
            <p
              style={{
                textAlign: "left",
                fontSize: "1rem",
                color: "grey",
                lineHeight: 2,
                fontFamily: "Verdana",
              }}
            >
              {t("introduction-career")}
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
                    {t("2024-jd")}
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
                  {t("2024-jd-detail-1")}
                  <br />
                  {t("2024-jd-detail-2")}
                  <br />
                  {t("2024-jd-detail-3")}
                  <br />
                  {t("2024-jd-detail-4")}
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
                  {t("2023-jd-detail-1")}
                  <br />
                  {t("2023-jd-detail-2")}
                  <br />
                  {t("2023-jd-detail-3")}
                  <br />
                  {t("2023-jd-detail-4")}
                  <br />
                  {t("2023-jd-detail-5")}
                  <br />
                  {t("2023-jd-detail-6")}
                  <br />
                  {t("2023-jd-detail-7")}
                  <br />
                  {t("2023-jd-detail-8")}
                  <br />
                  {t("2023-jd-detail-9")}
                  <br />
                  {t("2023-jd-detail-10")}
                  <br />
                </div>
                <div className="col-md-6 col-sm-12 d-flex flex-column align-items-center">
                  <img src={Mediacorp} alt="" />
                  <div className="lead">
                    Mediacorp PTE Ltds. <br />
                    {t("2023-jd-1")}
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
                  <div className="lead">{t("2023-jd-2")}</div>
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
                    {t("2022-jd-1")}
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
                    {t("2022-jd-2")}
                    <br />
                    {t("2022-jd-3")}
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
                  {t("2022-jd-detail-1")} <br />
                  {t("2022-jd-detail-2")} <br />
                  {t("2022-jd-detail-3")} <br />
                  {t("2022-jd-detail-4")} <br />
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
                  {t("2021-jd-detail-1")} <br />
                  {t("2021-jd-detail-2")} <br />
                  {t("2021-jd-detail-3")} <br />
                </div>
                <div className="col-md-6 col-sm-12 d-flex flex-column align-items-center">
                  <img src={allpku} alt="" style={{ width: "20%" }} />
                  <div className="lead text-center">
                    Alliance PKU Management Consultants LTD. <br />
                    {t("2021-jd-1")}
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
                    {t("2021-jd-2")} <br />
                    {t("2021-jd-3")}
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
                      {t("2020-jd")}
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
                      {t("2020-jd-detail")}
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

export default Career;
