import React from "react";
import piano from "../../static/images/friend/piano.png";
import cook from "../../static/images/friend/cook.jpg";
import travel from "../../static/images/friend/travel.jpg";
import hiking from "../../static/images/friend/hiking.jpg";
import "../../App.css";

function friend() {
  return (
    <div style={{ backgroundColor: "rgba(0,222,0,0.2)" }}>
      <div id="habit" style={{ padding: "20px" }}></div>
      <div className="display-4" style={{ margin: "20px" }}>
        🏳️‍🌈 Make Friends
      </div>
      <div className="container">
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
                [Music] <br />
                Classic Music <br />
                🎹 Piano: 12 years <br />
                🥁 Drums: 3 years <br />
                <br />
                🔥 VPO, BPO, LPO, BRSO <br />
                🔥 Beethoven & Tchikovsky Best <br />
                💣 Hate Bruckner <br />
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
                [Cooking] <br />
                🍳 Chinese food <br />
                🍽️ West food <br />
                🌭 Dessert <br />
                <br />
                🔥 Shanghainese Cuisine <br />
                🔥 North China Cuisine <br />
                💣 Wash dishes <br />
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
                [Travel] <br />
                🌍 50+ Countries <br />
                🗺️ Only for Cultural Heritage <br />
                <br />
                🔥 2024: South American <br />
                🔥 2024: Australia <br />
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
                [Hiking] <br />
                ⛰️ Like best <br />
                🤿 Scuba Diving OK <br />
                <br />
                🔥 Goal: Mount Kilimanjaro <br />
                🔥 Backgound Pic: Everest Base Camp <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-5" />
    </div>
  );
}

export default friend;
