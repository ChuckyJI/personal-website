import React from "react";
import piano from "../../static/images/friend/piano.png";
import piano_small from "../../static/images/friend/piano_small.png";
import cook from "../../static/images/friend/cook.jpg";
import cook_small from "../../static/images/friend/cook_small.png";
import travel from "../../static/images/friend/travel.jpg";
import travel_small from "../../static/images/friend/traval_small.png";
import hiking from "../../static/images/friend/hiking.jpg";
import hiking_small from "../../static/images/friend/hiking_small.png";
import { useTranslation } from "react-i18next";

import "../../App.css";

function Friend() {
  const { t } = useTranslation();
  return (
    <div style={{ backgroundColor: "rgba(0,222,0,0.2)" }}>
      <div id="habit" style={{ padding: "20px" }}></div>
      <div className="display-4" style={{ margin: "20px" }}>
        🏳️‍🌈 Make Friends
      </div>
      <div className="container-lg d-lg-block d-none">
        <div className="row">
          <div className="col-3 image-container">
            <img
              src={piano}
              alt="description"
              style={{ width: "100%" }}
              className="imgHabit"
            />
            <div className="hover-content">
              <div>
                {t("friend-1-jd-detail-1")}
                <br />
                {t("friend-1-jd-detail-2")}
                <br />
                {t("friend-1-jd-detail-3")}
                <br />
                {t("friend-1-jd-detail-4")}
                <br />
                <br />
                {t("friend-1-jd-detail-5")}
                <br />
                {t("friend-1-jd-detail-6")}
                <br />
                {t("friend-1-jd-detail-7")}
                <br />
              </div>
            </div>
          </div>
          <div className="col-3 image-container">
            <img
              src={cook}
              alt="description"
              style={{ width: "100%" }}
              className="imgHabit"
            />
            <div className="hover-content">
              <div>
                {t("friend-2-jd-detail-1")}
                <br />
                {t("friend-2-jd-detail-2")}
                <br />
                {t("friend-2-jd-detail-3")}
                <br />
                {t("friend-2-jd-detail-4")}
                <br />
                <br />
                {t("friend-2-jd-detail-5")}
                <br />
                {t("friend-2-jd-detail-6")}
                <br />
                {t("friend-2-jd-detail-7")}
                <br />
              </div>
            </div>
          </div>
          <div className="col-3 image-container">
            <img
              src={travel}
              alt="description"
              style={{ width: "100%" }}
              className="imgHabit"
            />
            <div className="hover-content">
              <div>
                {t("friend-3-jd-detail-1")}
                <br />
                {t("friend-3-jd-detail-2")}
                <br />
                {t("friend-3-jd-detail-3")}
                <br />
                <br />
                {t("friend-3-jd-detail-4")}
                <br />
                {t("friend-3-jd-detail-5")}
              </div>
            </div>
          </div>{" "}
          <div className="col-3 image-container">
            <img
              src={hiking}
              alt="description"
              style={{ width: "100%" }}
              className="imgHabit"
            />
            <div className="hover-content">
              <div>
                {t("friend-4-jd-detail-1")}
                <br />
                {t("friend-4-jd-detail-2")}
                <br />
                {t("friend-4-jd-detail-3")}
                <br />
                <br />
                {t("friend-4-jd-detail-4")}
                <br />
                {t("friend-4-jd-detail-5")}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-md d-lg-none d-block">
        <div class="card mb-3" style={{ maxWidth: "100%" }}>
          <div class="row g-0">
            <div class="col-md-4 d-none d-md-block">
              <img
                src={piano_small}
                class="img-fluid rounded-start"
                alt="..."
                style={{ height: "100%" }}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{t("Music")}</h5>
                <p class="card-text">
                  <div>
                    {t("friend-1-jd-detail-2")}
                    <br />
                    {t("friend-1-jd-detail-3")}
                    <br />
                    {t("friend-1-jd-detail-4")}
                    <br />
                    <br />
                    {t("friend-1-jd-detail-5")}
                    <br />
                    {t("friend-1-jd-detail-6")}
                    <br />
                    {t("friend-1-jd-detail-7")}
                    <br />
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3" style={{ maxWidth: "100%" }}>
          <div class="row g-0">
            <div class="col-md-4 d-none d-md-block">
              <img
                src={cook_small}
                class="img-fluid rounded-start"
                alt="..."
                style={{ height: "100%" }}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{t("Cooking")}</h5>
                <p class="card-text">
                  <div>
                    {t("friend-2-jd-detail-2")}
                    <br />
                    {t("friend-2-jd-detail-3")}
                    <br />
                    {t("friend-2-jd-detail-4")}
                    <br />
                    <br />
                    {t("friend-2-jd-detail-5")}
                    <br />
                    {t("friend-2-jd-detail-6")}
                    <br />
                    {t("friend-2-jd-detail-7")}
                    <br />
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3" style={{ maxWidth: "100%" }}>
          <div class="row g-0">
            <div class="col-md-4 d-none d-md-block">
              <img
                src={travel_small}
                class="img-fluid rounded-start"
                alt="..."
                style={{ height: "100%" }}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{t("Travel")}</h5>
                <p class="card-text">
                  <div>
                    {t("friend-3-jd-detail-2")}
                    <br />
                    {t("friend-3-jd-detail-3")}
                    <br />
                    <br />
                    {t("friend-3-jd-detail-4")}
                    <br />
                    {t("friend-3-jd-detail-5")}
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3" style={{ maxWidth: "100%" }}>
          <div class="row g-0">
            <div class="col-md-4 d-none d-md-block">
              <img
                src={hiking_small}
                class="img-fluid rounded-start"
                alt="..."
                style={{ height: "100%" }}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{t("Hiking")}</h5>
                <p class="card-text">
                  <div>
                    {t("friend-4-jd-detail-2")}
                    <br />
                    {t("friend-4-jd-detail-3")}
                    <br />
                    <br />
                    {t("friend-4-jd-detail-4")}
                    <br />
                    {t("friend-4-jd-detail-5")}
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-5" />
    </div>
  );
}

export default Friend;
