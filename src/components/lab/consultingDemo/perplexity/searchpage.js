import React, { useState, useEffect, useRef } from "react";
import { Divider } from "antd";

import { Ad } from "react-ad-manager";

import "./searchpage.css";

import { useLocation } from "react-router-dom";

import useSourse from "./useComponents/useSourse";
import useVideo from "./useComponents/useVideo";
import useAnswer from "./useComponents/useAnswer";
import useRelated from "./useComponents/useRelated";
import useSearch from "./useComponents/useSearch";
import useHistory from "./useComponents/useHistory";
import useLLM from "./useComponents/useLLM";

function Searchpage() {
  const location = useLocation();
  const currentDate = new Date();
  const [data, setData] = useState(location.state.data);
  const [record, setRecord] = useState(location.state.data.searchResult[0]);
  const [chatContent, setChatContent] = useState(
    location.state.data.chatContent
  );
  const [save, setSave] = useState(false);

  const prevOutputRef = useRef("");

  const { relatedDiv, innerValue } = useRelated(record);
  const { searchDiv, output, generateRecord, generateTime } = useSearch(
    "sync",
    innerValue
  );
  const { historyDiv, outputTitle, outputRecord } = useHistory();

  useEffect(() => {
    setData(outputTitle);
    setRecord(outputRecord);
    setChatContent(outputRecord.answers);
  }, [outputTitle, outputRecord]);

  useEffect(() => {
    if (location.state.data.searchContent[0] !== undefined) {
      setData(location.state.data);
      setRecord(location.state.data.searchResult[0]);
      setChatContent(location.state.data.searchResult.slice(1));
    }
  }, []);

  const saveData = async (
    outputFunction,
    generateRecordFunction,
    generateTimeFunction
  ) => {
    setSave(true);
    try {
      const response = await fetch("http://localhost:8001/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          output: outputFunction,
          generateRecord: generateRecordFunction,
          generateTime: generateTimeFunction,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("There was an error saving the file:", error);
    }
  };

  useEffect(() => {
    if (output !== "") {
      setRecord(generateRecord[0]);
      setChatContent(generateRecord.slice(1));
      const result = {
        searchContent: output,
      };
      setData(result);

      if (prevOutputRef.current !== output) {
        if (!save) {
          saveData(output, generateRecord, generateTime);
        }
      }

      prevOutputRef.current = output;

      if (save) {
        setSave(false);
      }
    }
  }, [output, generateRecord, generateTime]);

  const llmDiv = useLLM(chatContent);
  const answerDiv = useAnswer(record);
  const sourseDiv = useSourse(record);
  const videoDiv = useVideo(record);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        marginTop: "60px",
      }}
      width="100%"
    >
      <div>
        <div className="row">
          <div className="col-2">
            <div
              className="ad-container"
              style={{
                left: "0",
              }}
            >
              {/* <Ad
                adUnit="/4654/cna_dweb/side1/search/na/na"
                name="div-gpt-ad-4897300-1"
                size={[300, 600]}
              /> */}
            </div>
          </div>
          <div className="col-8" style={{ textAlign: "left" }}>
            <div
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                marginTop: "20px",
                lineHeight: "1.5",
                display: "flex",
                flexDirection: "row",
              }}
            >
              {historyDiv}
              {data.searchContent}
            </div>
            <div>Time: {currentDate.toLocaleString()}</div>

            {record.api_search === null ? (
              <div>
                <div style={{ paddingTop: "20px" }}>
                  <span
                    style={{
                      fontSize: "18px",
                      lineHeight: "2",
                      fontWeight: "bold",
                    }}
                  >
                    {record.welcome_mesg}
                  </span>
                </div>
              </div>
            ) : (
              <>
                <Divider />
                {llmDiv}

                <Divider />
                {answerDiv}

                <Divider />
                {sourseDiv}
                {videoDiv}
              </>
            )}

            <Divider />
            {relatedDiv}
            <div style={{ height: "80px" }}></div>
            <div
              style={{
                display: "flex",
                position: "fixed",
                bottom: "0",
                width: "100%",
                justifyContent: "center",
                textAlign: "center",
                left: "0",
              }}
            >
              {searchDiv}
            </div>
          </div>
          <div className="col-2">
            <div
              className="ad-container"
              style={{
                right: "0",
              }}
            >
              {/* <Ad
                adUnit="/4654/cna_dweb/side1/search/na/na"
                name="div-gpt-ad-4221603-1"
                size={[300, 600]}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchpage;
