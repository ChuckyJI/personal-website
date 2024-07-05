import { useState } from "react";
import { Ad } from "react-ad-manager";
import { Card } from "antd";
import newsPic from "../static/picTemplate.png";
import "../searchpage.css";

import mediacorp from "../static/logo.png";

import cna from "../static/logo/cna.png";
import mewatch from "../static/logo/mewatch.png";
import todayonline from "../static/logo/todayonline.png";
import espn from "../static/logo/espn.png";
import mothership from "../static/logo/mothership.png";
import melisten from "../static/logo/melisten.png";
import wondershop from "../static/logo/wondershop.png";
import merewards from "../static/logo/merewards.png";
import eight_world from "../static/logo/8world.png";
import logo from "../static/logo.png";

const useAnswer = (record) => {
  const gridStyle = {
    width: "50%",
    textAlign: "left",
  };

  const [name, setName] = useState("mediacorp");

  if (record.custom_search === null) {
    return;
  }

  const fetchSite = (record, name) => {
    if (name === "mediacorp") {
      return false;
    }
    const siteList = Object.entries(record.custom_search.news).map(
      ([url, _]) => {
        const parts = new URL(url).hostname.split(".");
        return parts.slice(-2, -1)[0] !== "com"
          ? parts.slice(-2, -1)[0]
          : parts.slice(-3, -2)[0];
      }
    );
    for (let i = 0; i < siteList.length; i++) {
      if (siteList[i].includes(name)) {
        return false;
      }
    }
    return true;
  };

  const countUrls = (data, labelname) => {
    let totalUrls = 0;

    Object.entries(data)
      .filter(([url, _]) =>
        url.includes(labelname === "mediacorp" ? "" : labelname)
      )
      .forEach(([key, value]) => {
        totalUrls += 1;

        if (value.deepLinks.length !== 0) {
          totalUrls += value.deepLinks.length;
        }
      });

    return totalUrls;
  };

  const buttonLogo = (labelname, img) => {
    return (
      <button
        type="button"
        className="btn"
        name={labelname}
        style={{ border: "1px solid #000", margin: "10px 10px" }}
        disabled={fetchSite(record, labelname)}
        onClick={() => setName(labelname)}
      >
        {countUrls(record.custom_search.news, labelname)}

        <img
          src={img}
          alt={name}
          style={{
            height: "25px",
            width: "auto",
            margin: "0px 20px",
            filter: fetchSite(record, labelname)
              ? "grayscale(100%)"
              : "grayscale(0%)",
            hidden: fetchSite(record, labelname),
          }}
        />
      </button>
    );
  };

  const randonNum = () => {
    const randonNum1 = Math.floor(Math.random() * 1000000);
    return "div-gpt-ad-" + randonNum1.toString();
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
        }}
      >
        <img
          src={mediacorp}
          style={{ width: "20px", height: "20px" }}
          alt="mediacorp"
        />
        <span
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            margin: "0 10px",
          }}
        >
          Mediacorp Answers:
        </span>
      </div>
      <div>
        <div style={{ margin: "20px 30px" }}>
          {buttonLogo("mediacorp", logo)}
          {buttonLogo("channelnewsasia", cna)}
          {buttonLogo("mewatch", mewatch)}
          {buttonLogo("8world", eight_world)}
          {buttonLogo("todayonline", todayonline)}
          {buttonLogo("espn", espn)}
          {buttonLogo("mothership", mothership)}
          {buttonLogo("melisten", melisten)}
          {buttonLogo("wondershop", wondershop)}
          {buttonLogo("merewards", merewards)}
        </div>
      </div>

      <Card>
        {Object.entries(record.custom_search.news)
          .filter(([url, _]) => url.includes(name === "mediacorp" ? "" : name))
          .map(([url, { name, openGraphImage, deepLinks, snippet }], index) =>
            deepLinks.length !== 0 ? (
              <>
                <Card.Grid style={gridStyle}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="row">
                      <div className="col-5">
                        <img
                          src={
                            openGraphImage.contentUrl
                              ? openGraphImage.contentUrl
                              : newsPic
                          }
                          alt="news"
                          style={{ width: "100%", borderRadius: "15px" }}
                        />
                      </div>
                      <div
                        className="col-7"
                        style={{ display: "flex", justifyContent: "top" }}
                      >
                        <div>
                          <span
                            style={{ fontSize: "20px", fontWeight: "bold" }}
                          >
                            {name}
                          </span>
                          <br />
                          <span style={{ fontSize: "16px" }}>{snippet}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </Card.Grid>
                {Object.entries(deepLinks).map(
                  ([_, { url, name, snippet }], deepLinkIndex) => (
                    <Card.Grid style={gridStyle}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <div className="row">
                          <div className="col-5">
                            <img
                              src={
                                openGraphImage.contentUrl
                                  ? openGraphImage.contentUrl
                                  : newsPic
                              }
                              alt="news"
                              style={{ width: "100%", borderRadius: "15px" }}
                            />
                          </div>
                          <div
                            className="col-7"
                            style={{ display: "flex", justifyContent: "top" }}
                          >
                            <div>
                              <span
                                style={{ fontSize: "20px", fontWeight: "bold" }}
                              >
                                {name}
                              </span>
                              <br />
                              <span style={{ fontSize: "16px" }}>
                                {snippet}
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Card.Grid>
                  )
                )}
              </>
            ) : (
              <Card.Grid style={gridStyle}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="row">
                    <div className="col-5">
                      <img
                        src={
                          openGraphImage.contentUrl
                            ? openGraphImage.contentUrl
                            : newsPic
                        }
                        alt="news"
                        style={{ width: "100%", borderRadius: "15px" }}
                      />
                    </div>
                    <div
                      className="col-7"
                      style={{ display: "flex", justifyContent: "top" }}
                    >
                      <div>
                        <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                          {name}
                        </span>
                        <br />
                        <span style={{ fontSize: "16px" }}>{snippet}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Card.Grid>
            )
          )}
      </Card>
    </>
  );
};

export default useAnswer;
