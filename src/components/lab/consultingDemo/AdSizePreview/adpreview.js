import React, { useState } from "react";
import { Divider } from "antd";
import testImg from "../../../../static/images/lab/discoverylab/AdPreviewtest.png";
import generatead from "./generatead";

function Adpreview() {
  const [adLargeProportion, setAdLargeProportion] = useState("3/1");
  const [adSmallProportion, setAdSmallProportion] = useState("1/2");
  const [imgProportion, setImgProportion] = useState("16/9");
  const [imgShiftLeftRight, setImgShiftLeftRight] = useState(0);
  const [imgShiftUpDown, setImgShiftUpDown] = useState(0);
  const [headline, setHeadline] = useState("Test Headline");
  const [description, setDescription] = useState("Test Description");
  const [PageContent, setPageContent] = useState();
  const [ratio, setRatio] = useState();

  const GenerateAd = () => {
    const htmlContent = generatead(
      testImg,
      adLargeProportion,
      adSmallProportion,
      imgProportion,
      parseFloat(imgShiftLeftRight),
      parseFloat(imgShiftUpDown),
      headline,
      description
    );

    setPageContent(htmlContent);
  };

  return (
    <div className="container">
      <div className="row">
        <div
          style={{
            padding: "60px 0px 20px 0px",
            textAlign: "center",
            fontSize: "48px",
            fontWeight: "bold",
          }}
        >
          Flexible Ads Test
        </div>
        <div>
          This is not the complete code for all scenarios, but it covers some
          common size.
        </div>
        <Divider />
        <div style={{ width: "100%" }} className="mt-4">
          <h4>Basic Setting</h4>
          <div className="input-group mt-3 mb-3">
            <span className="input-group-text" id="basic-addon1">
              Ad Large Size Proportion:
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="4/1 OR 3/1"
              aria-label="proportion"
              aria-describedby="basic-addon1"
              onChange={(e) => setAdLargeProportion(e.target.value)}
              defaultValue={adLargeProportion}
            />
            <span className="input-group-text" id="basic-addon1">
              Ad Small Size Proportion:
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="1/1 OR 1/2"
              aria-label="proportion"
              aria-describedby="basic-addon1"
              defaultValue={adSmallProportion}
              onChange={(e) => setAdSmallProportion(e.target.value)}
            />
          </div>

          <h4>Advanced Setting</h4>
          <div>This setting is for advanced adjustment</div>
          <div className="input-group mt-3">
            <span className="input-group-text" id="basic-addon1">
              Image Proportion:
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Default value 16/9"
              aria-label="Imgproportion"
              aria-describedby="basic-addon1"
              defaultValue={imgProportion}
              onChange={(e) => setImgProportion(e.target.value)}
            />
          </div>
          <div className="input-group mt-3">
            <span className="input-group-text" id="basic-addon1">
              Image Shifting (Left-Right):
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Left is +, Right is -"
              aria-label="Imgproportion"
              aria-describedby="basic-addon1"
              defaultValue={imgShiftLeftRight}
              onChange={(e) => setImgShiftLeftRight(e.target.value)}
            />
            <span className="input-group-text" id="basic-addon1">
              Image Shifting (Up-Down):
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Up is +,Down is -"
              aria-label="Imgproportion"
              aria-describedby="basic-addon1"
              defaultValue={imgShiftUpDown}
              onChange={(e) => setImgShiftUpDown(e.target.value)}
            />
          </div>
          <div className="input-group mt-3">
            <span className="input-group-text" id="basic-addon1">
              Headline:
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Input your test headline."
              aria-label="Imgproportion"
              aria-describedby="basic-addon1"
              defaultValue={headline}
              onChange={(e) => setHeadline(e.target.value)}
            />
          </div>
          <div className="input-group mt-3">
            <span className="input-group-text" id="basic-addon1">
              Description:
            </span>
            <textarea
              className="form-control"
              placeholder="Input your test description."
              aria-label="Imgproportion"
              aria-describedby="basic-addon1"
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div
            className="btn btn-primary mt-4 mb-4"
            onClick={() => GenerateAd()}
          >
            Submit
          </div>
          <Divider />
          <div
            style={{
              textAlign: "center",
              fontSize: "36px",
              fontWeight: "bold",
            }}
          >
            Preview Area
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                // width: "600px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              <div className="mt-2">
                <input
                  className="form-check-input"
                  type="radio"
                  onChange={(e) => setRatio(e.target.id)}
                  name="ratiocheck"
                  id="mobile"
                />
                <label className="form-check-label" htmlFor="mobile">
                  📱 Mobile View
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="form-check-input"
                  type="radio"
                  onChange={(e) => setRatio(e.target.id)}
                  name="ratiocheck"
                  id="ipad"
                />
                <label className="form-check-label" htmlFor="ipad">
                  💻 iPad View
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="form-check-input"
                  type="radio"
                  onChange={(e) => setRatio(e.target.id)}
                  id="desktop"
                  name="ratiocheck"
                />
                <label className="form-check-label" htmlFor="desktop">
                  📓 Desktop View
                </label>
              </div>
              <div className="mt-2">
                <input
                  className="form-check-input"
                  type="radio"
                  onChange={(e) => setRatio(e.target.id)}
                  id="custom"
                  name="ratiocheck"
                />
                <label className="form-check-label" htmlFor="custom">
                  🚹 Custom View
                </label>
              </div>
            </div>
            <iframe
              style={{
                resize: (ratio === "custom" && "both") || "none",
                overflow: "auto",
                border: "1px solid black",
                padding: "10px",
                width:
                  (ratio === "mobile" && "430px") ||
                  (ratio === "ipad" && "768px") ||
                  (ratio === "desktop" && "100%") ||
                  "100%",
                height:
                  (ratio === "mobile" && "932px") ||
                  (ratio === "ipad" && "768px") ||
                  (ratio === "desktop" && "800px") ||
                  "200px",
              }}
              srcDoc={PageContent}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adpreview;
