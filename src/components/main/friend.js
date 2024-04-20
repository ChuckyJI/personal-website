import React from "react";
import piano from "../../static/images/friend/piano.png";
import piano_small from "../../static/images/friend/piano_small.png";
import cook from "../../static/images/friend/cook.jpg";
import cook_small from "../../static/images/friend/cook_small.png";
import travel from "../../static/images/friend/travel.jpg";
import travel_small from "../../static/images/friend/traval_small.png";
import hiking from "../../static/images/friend/hiking.jpg";
import hiking_small from "../../static/images/friend/hiking_small.png";
import "../../App.css";

function friend() {
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
                <h5 class="card-title">Music</h5>
                <p class="card-text">
                  <div>
                    Classic Music <br />
                    🎹 Piano: 12 years <br />
                    🥁 Drums: 3 years <br />
                    <br />
                    🔥 VPO, BPO, LPO, BRSO <br />
                    🔥 Beethoven & Tchikovsky Best <br />
                    💣 Hate Bruckner <br />
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
                <h5 class="card-title">Cooking</h5>
                <p class="card-text">
                  <div>
                    🍳 Chinese food <br />
                    🍽️ West food <br />
                    🌭 Dessert <br />
                    <br />
                    🔥 Shanghainese Cuisine <br />
                    🔥 North China Cuisine <br />
                    💣 Wash dishes <br />
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
                <h5 class="card-title">Travel</h5>
                <p class="card-text">
                  <div>
                    🌍 50+ Countries <br />
                    🗺️ Only for Cultural Heritage <br />
                    <br />
                    🔥 2024: South American <br />
                    🔥 2024: Australia <br />
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
                <h5 class="card-title">Hiking</h5>
                <p class="card-text">
                  <div>
                    ⛰️ Like best <br />
                    🤿 Scuba Diving OK <br />
                    <br />
                    🔥 Goal: Mount Kilimanjaro <br />
                    🔥 Backgound Pic: Everest Base Camp <br />
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

export default friend;
