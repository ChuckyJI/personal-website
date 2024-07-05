import React, { useState } from "react";
import Logo from "./static/logo.png";
import "./landingpage.css";

import { Tag } from "antd";

import useSearch from "./useComponents/useSearch";

function Landingpage() {
  const [search, setSearch] = useState("");
  const [welcomeContent, setWelcomeContent] = useState({});

  const { searchDiv, _ } = useSearch("async", search);

  const marqueeStyle = (message) => {
    return (
      <span className="marquee-text-item" onClick={() => setSearch(message)}>
        😊: {message}
      </span>
    );
  };

  const getWelcomePage = async () => {
    try {
      const response = await fetch("/score", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer LLuq2XWcrdIhEka15Z0BLWNpyRigsSXU`,
        },
        body: JSON.stringify({
          "question": "catch me up",
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setWelcomeContent(data);
      const element = document.querySelector(".btn.btn-primary");
      if (element) {
        element.innerHTML = "CATCH ME UP";
      }
    } catch (e) {
      console.error(e);
    }
  };

  const welcomePage = () => {
    const element = document.querySelector(".btn.btn-primary");
    if (element) {
      element.innerHTML = `
      <span
        style="display: flex; align-items: center;"
      >
        <div
          class="spinner-border"
          role="status"
          style="width: 25px; height: 25px;"
        ></div>
      </span>
    `;
    }
    getWelcomePage();
  };

  const chooseColor = () => {
    const colorList = [
      "magenta",
      "red",
      "purple",
      "geekblue",
      "blue",
      "cyan",
      "green",
      "lime",
      "gold",
      "orange",
      "volcano",
    ];

    const RandonNumber = Math.floor(Math.random() * colorList.length);
    return colorList[RandonNumber];
  };

  return (
    <div
      style={{
        // position: "relative",
        width: "100vw",
        height: "100vh",
        marginTop: "80px",
      }}
    >
      {/* search banner  */}
      <div
        style={{
          // position: "absolute",
          // top: "40%",
          // left: "50%",
          // transform: "translate(-50%, -50%)",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "300px",
              height: "auto",
            }}
          />
        </div>
        <div
          style={{ fontSize: "36px", fontWeight: "bold", textAlign: "center" }}
        >
          Welcome back!
        </div>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {searchDiv}
        </div>

        <button className="btn btn-primary" onClick={() => welcomePage()}>
          CATCH ME UP
        </button>

        <div className="container">
          <div
            style={{
              width: "100%",
              height: "auto",
              margin: "10px 0",
            }}
          >
            {welcomeContent ? (
              <div>
                <span style={{ fontSize: "18px", lineHeight: "2" }}>
                  {welcomeContent.welcome_mesg}
                </span>
                <div className="row">
                  {welcomeContent.reco_questions !== undefined &&
                    welcomeContent.reco_questions.map((item, index) => {
                      return (
                        <div className="col-4">
                          <div
                            className="custom"
                            type="button"
                            style={{
                              height: "auto",
                              margin: "10px 0",
                              padding: "10px",
                              borderRadius: "15px",
                              border: "1px solid #e8e8e8",
                            }}
                            onClick={() => setSearch(item.question)}
                          >
                            <Tag color={chooseColor()}>{item.tag}</Tag>
                            <div
                              style={{
                                fontSize: "18px",
                                margin: "10px 0",
                                textAlign: "right",
                              }}
                            >
                              {item.question}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* floating banner  */}
        <div className="marquee">
          <div className="marquee-text">
            {marqueeStyle("Tell me more about the NVIDIA")}
            {marqueeStyle("Euro 24 key moments.")}
            {marqueeStyle("Singaporean Olympic results.")}
            {marqueeStyle("What’s happening in Bukit Timah now?")}
            {marqueeStyle("major sales in June.")}
            {marqueeStyle("climate voucher.")}
            {marqueeStyle("Interesting activities in June holiday.")}
          </div>

          <div className="marquee-text">
            {marqueeStyle("Tell me more about the sports")}
            {marqueeStyle("This is the 2nd message line 2.")}
            {marqueeStyle("This is the 3rd message line 2.")}
            {marqueeStyle("This is the 4th message line 2.")}
          </div>

          <div className="marquee-text">
            {marqueeStyle("Template1")}
            {marqueeStyle("This is the 2nd message line 3.")}
            {marqueeStyle("This is the 3rd message line 3.")}
            {marqueeStyle("This is the 4th message line 3.")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
