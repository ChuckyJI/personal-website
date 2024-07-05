import React, { useState } from "react";
import { Tag } from "antd";

const useRelated = (record) => {
  const [innerValue, setInnerValue] = useState("");

  const handleClick = (index) => {
    setInnerValue(record.reco_questions[index].question);
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

  const relatedDiv = (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          margin: "20px 0",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-joystick"
          viewBox="0 0 16 16"
        >
          <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2" />
          <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23" />
        </svg>
        <span
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            margin: "0 10px",
          }}
        >
          Related:
        </span>
      </div>
      <div>
        {Object.entries(record.reco_questions).map(([, question], index) => (
          <a
            className="row related"
            onClick={() => handleClick(index)}
            key={index}
          >
            <div
              className="col-11"
              style={{
                fontSize: "16px",
                margin: "15px 0",
              }}
            >
              <Tag color={chooseColor()}>{question.tag}</Tag>
              {question.question}
            </div>
            <div
              className="col-1"
              style={{
                fontSize: "20px",
                margin: "15px 0",
                textAlign: "right",
              }}
            >
              +
            </div>
          </a>
        ))}
      </div>
    </div>
  );

  return { relatedDiv, innerValue };
};

export default useRelated;
