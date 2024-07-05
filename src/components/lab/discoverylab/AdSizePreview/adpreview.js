import React, { useState } from "react";
import { Divider } from "antd";
import testImg from "../../../../static/images/lab/discoverylab/AdPreviewtest.png";
import logo from "../../../../static/images/Logotest.png";
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
  const [backgroundPic, setBackgroundPic] = useState();
  const [logoImage, setLogoImage] = useState();
  const [sponsorName, setSponsorName] = useState("ABCDE");
  const [backFormat, setBackFormat] = useState("image/png");

  const [formatImage, setFormatImage] = useState(true);
  const [formatText, setFormatText] = useState(true);
  const [formatVideo, setFormatVideo] = useState(false);

  const [layoutStyle, setLayoutStyle] = useState("imageText");

  const [secondRichMedia, setSecondRichMedia] = useState();

  const GenerateAd = () => {
    const htmlContent = generatead(
      backFormat,
      backgroundPic ? URL.createObjectURL(backgroundPic[0]) : testImg,
      adLargeProportion,
      adSmallProportion,
      imgProportion,
      parseFloat(imgShiftLeftRight),
      parseFloat(imgShiftUpDown),
      headline,
      description,
      sponsorName,
      logoImage ? URL.createObjectURL(logoImage[0]) : logo,
      layoutStyle,
      secondRichMedia ? URL.createObjectURL(secondRichMedia[0]) : testImg
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
          <div>
            This setting is for advanced adjustment. And the rich media contains
            image and video(mp4).
          </div>
          <div className="input-group mt-3">
            <label className="input-group-text" htmlFor="inputGroupFile01">
              Choose a background Media
            </label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => {
                const file = e.target.files[0];
                if (
                  file.type === "image/jpeg" ||
                  file.type === "image/png" ||
                  file.type === "image/jpg" ||
                  file.type === "video/mp4"
                ) {
                  setBackgroundPic(e.target.files);
                  setBackFormat(e.target.files[0].type);
                } else {
                  alert("Please upload a PNG, JPEG, JPG OR MP4 file");
                }
              }}
            />
            <span className="input-group-text" id="basic-addon1">
              Image (1st Media) Proportion:
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
            <label className="input-group-text" htmlFor="inputGroupFile01">
              Choose a Logo
            </label>
            <input
              className="form-control"
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file.type === "image/jpeg" || file.type === "image/png") {
                  setLogoImage(e.target.files);
                } else {
                  alert("Please upload a PNG or JPEG file");
                }
              }}
            />
            <span className="input-group-text" id="basic-addon1">
              Sponsor Name:
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Input your sponsor name."
              aria-label="sponsprname"
              aria-describedby="basic-addon1"
              defaultValue={sponsorName}
              onChange={(e) => setSponsorName(e.target.value)}
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
            className="input-group mt-3"
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <span className="input-group-text" id="basic-addon1">
              Content Format
            </span>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="Image"
              checked={formatImage}
              onChange={(e) => setFormatImage(e.target.checked)}
              style={{ margin: "0px 10px" }}
            />
            <label className="form-check-label" htmlFor="Image">
              Image
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="Text"
              checked={formatText}
              onChange={(e) => setFormatText(e.target.checked)}
              style={{ margin: "0px 10px" }}
            />
            <label className="form-check-label" htmlFor="Text">
              Text
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="Video"
              onChange={(e) => {
                if (formatImage && formatText) {
                  alert(
                    "You can only choose one content format from Image or Text"
                  );
                  e.target.checked = false;
                } else {
                  setFormatVideo(e.target.checked);
                }
              }}
              style={{ margin: "0px 10px" }}
            />
            <label className="form-check-label" htmlFor="Video">
              Video
            </label>
            {formatVideo && (
              <div>
                <input
                  type="file"
                  style={{ margin: "0px 10px" }}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file.type === "video/mp4") {
                      setSecondRichMedia(e.target.files);
                    } else {
                      alert("Please upload a MP4 file");
                    }
                  }}
                />
              </div>
            )}
          </div>

          <div
            className="input-group mt-3"
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <span className="input-group-text" id="basic-addon1">
              Layout Format
            </span>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="imageText"
                value="imageText"
                checked={layoutStyle === "imageText"}
                disabled={formatVideo}
                style={{ margin: "0px 10px" }}
                onChange={(e) => setLayoutStyle(e.target.value)}
              />
              <label className="form-check-label" htmlFor="imageText">
                Default Design{" "}
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="imageVideo"
                value="imageVideo"
                checked={layoutStyle === "imageVideo"}
                disabled={!formatVideo}
                style={{ margin: "0px 10px" }}
                onChange={(e) => setLayoutStyle(e.target.value)}
              />
              <label className="form-check-label" htmlFor="imageVideo">
                Up Image, Down Video (Left Image, Right Video)
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="videoImage"
                value="videoImage"
                checked={layoutStyle === "videoImage"}
                disabled={!formatVideo}
                style={{ margin: "0px 10px" }}
                onChange={(e) => setLayoutStyle(e.target.value)}
              />
              <label className="form-check-label" htmlFor="videoImage">
                Up Video, Down Image (Left Video, Right Image)
              </label>
            </div>
          </div>

          <button
            className="btn btn-primary mt-4 mb-4"
            onClick={() => GenerateAd()}
            disabled={formatImage && formatText && formatVideo}
          >
            Submit
          </button>

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
