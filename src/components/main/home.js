import React from "react";
import universe from "../../static/videos/universe.mov";
import backchucky from "../../static/images/without_BG.png";

function home() {
  return (
    <div>
      {" "}
      <div className="position-relative">
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          src={universe}
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        ></video>
        <img
          src={backchucky}
          alt="description"
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            height: "100%",
            objectFit: "cover",
            opacity: "0.3",
          }}
        />
        <div className="container-fluid position-absolute top-50 start-50 translate-middle">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-6 text-center">
              <div
                style={{ fontSize: "4rem", fontWeight: "bold", color: "white" }}
              >
                Chucky Kazamatsuri
              </div>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                AI Full-stack Engineer & Consultant (Senior Partner)
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
