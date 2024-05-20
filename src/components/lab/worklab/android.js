import React from "react";
import {
  faJava,
  faAndroid,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import andriodGame1 from "../../../static/images/lab/worklab/androidGame1.png";
import andriodGame2 from "../../../static/images/lab/worklab/androidGame2.png";
import andriodGame3 from "../../../static/images/lab/worklab/androidGame3.png";
import andriodGame4 from "../../../static/images/lab/worklab/androidGame4.png";

function androidGame() {
  return (
    <div>
      <div style={{ margin: "50px 0" }}></div>
      <div>
        <div
          id="lab"
          style={{ padding: "20px", fontWeight: "bold" }}
          className="bg-info-subtle lead"
        >
          Android Match Game (1 Player or 2 Players)
        </div>
        <div className="container-md d-lg-block d-none mt-5">
          <div class="card">
            <div class="card-body" style={{ textAlign: "left" }}>
              <h5 class="card-title">
                <FontAwesomeIcon
                  icon={faJava}
                  size="3x"
                  style={{ margin: "0 20px" }}
                />
                <FontAwesomeIcon
                  icon={faAndroid}
                  size="3x"
                  style={{ margin: "0 20px" }}
                />
              </h5>
              <h5>Difficulty: 5/10</h5>
              <h6
                class="card-subtitle mb-2 mt-2 text-body-secondary"
                style={{ fontWeight: "bold", lineHeight: 2 }}
              >
                Background: This is my Android Match Game project when I was in
                NUS. In this game, you find a website and fetch 20 images from
                it, then choose 6 of them to start the game. The game can be
                played by 1 player for fun or 2 players to compete. During the
                game, a player selects 2 images to match. If the images match,
                the player earns a point. If they don’t match, the images are
                hidden and the next player takes their turn. The player with the
                most points at the end wins.
              </h6>
              <p class="card-text" style={{ lineHeight: 2 }}>
                Step 1: Input the URL inside it, then click "CHECK" to see
                whether the URL is OK or not. If the URL is OK, then click
                "FETCH" to fetch 20 images.
                <br />
                Step 2: Choose 6 of them to start the game. <br />
                Step 3: Match the same images and win the game. <br />
              </p>

              <div className="card">
                <div className="card-body">
                  <div
                    className="head mt-3 mb-3"
                    style={{ fontWeight: "bold" }}
                  >
                    Welcome to the Lab:
                  </div>
                  <a
                    className="btn btn-primary"
                    href="https://github.com/ChuckyJI/Android_CA"
                    style={{ marginRight: "20px" }}
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size="2x"
                      style={{ margin: "0 20px" }}
                    />
                  </a>
                </div>
              </div>

              <hr />

              <div className="head mt-3 mb-3" style={{ fontWeight: "bold" }}>
                GAME Screenshot:
              </div>
              <img src={andriodGame1} alt="" style={{ width: "25%" }} />
              <img src={andriodGame2} alt="" style={{ width: "25%" }} />
              <img src={andriodGame3} alt="" style={{ width: "25%" }} />
              <img src={andriodGame4} alt="" style={{ width: "25%" }} />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default androidGame;
