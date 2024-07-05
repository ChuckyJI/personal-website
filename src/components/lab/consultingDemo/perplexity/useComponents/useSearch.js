import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import template from "../sample/fakeresponse.json";

const useSearch = (situation, message) => {
  const [search, setSearch] = useState("");
  const [output, setOutput] = useState("");
  const [generateRecord, setGenerateRecord] = useState({});
  const [generateTime, setGenerateTime] = useState(0);
  const [click, setClick] = useState(false);

  const navigate = useNavigate();

  const saveData = async (
    outputFunction,
    generateRecordFunction,
    generateTimeFunction,
    jsonObj
  ) => {
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
          generateChat: jsonObj,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("There was an error saving the file:", error);
    }
  };

  async function handleClick() {
    try {
      setClick(true);
      if (search === "") {
        window.alert("Please enter a search query");
        setClick(false);
        return;
      }

      const welcomeList = [
        "hi",
        "hey",
        "greetings",
        "good morning",
        "good afternoon",
        "good evening",
        "good night",
        "howdy",
        "catch me up",
        "Hello there",
        "hiya",
        "hey there",
        "salutations",
        "good day",
        "good to see you",
        "evening",
        "nighty night",
        "howdy partner",
        "fill me in",
      ];

      let result = [];

      if (search === "Template1") {
        result[0] = template;
        result[1] = { "answer": "" };
        const data = {
          searchContent: search,
          searchResult: result,
        };

        saveData(search, template, new Date().toLocaleString());
        navigate("/lab/consultingdemo/searchingpage", { state: { data } });
        return;
      }

      const azureApiKey = process.env.AZURE_APIKEY;

      if (
        welcomeList
          .map((item) => item.toLowerCase())
          .includes(search.toLowerCase())
      ) {
        const response = await fetch("/score", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${azureApiKey}`,
          },
          body: JSON.stringify({
            "question": search,
          }),
        });

        result[0] = await response.json();
        result[1] = { "answer": "" };
      } else {
        const response = await fetch("/score", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${azureApiKey}`,
            "Accept": "text/event-stream",
          },
          body: JSON.stringify({
            "question": search,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const reader = response.body?.getReader();
        while (reader) {
          const { value, done } = await reader.read();
          const chars = new TextDecoder().decode(value);
          if (done) {
            break;
          }
          const dataArray = chars.trim().split("\n\n");

          const jsonObj = dataArray.map((data) => {
            const jsonString = data.substring("data:".length);
            return JSON.parse(jsonString);
          });
          result = jsonObj;
        }
      }

      const data = {
        searchContent: search,
        searchResult: result,
      };

      if (situation === "async") {
        saveData(search, result, new Date().toLocaleString());
        navigate("/search", { state: { data } });
      } else {
        setClick(false);
        setSearch("");
        setOutput(search);
        setGenerateRecord(result);
        setGenerateTime(new Date().toLocaleString());
      }
    } catch (error) {
      console.error("Fetch error: ", error);
    }
  }

  useEffect(() => {
    setSearch(message);
  }, [message]);

  const searchDiv = (
    <div>
      <div
        className="input-group input-group-sm mb-3"
        style={{ width: "60vw", margin: "20px 0px", height: "50px" }}
      >
        <span className="input-group-text" id="inputGroup-sizing-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          value={search}
          placeholder="Ask Anything"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClick();
            }
          }}
        />

        {click ? (
          <span
            style={{
              display: "flex",
              alignItems: "center",
            }}
            className="input-group-text"
            id="inputGroup-sizing-sm"
          >
            <div
              className="spinner-border"
              role="status"
              style={{ width: "30px", height: "30px" }}
            ></div>
          </span>
        ) : (
          <span
            className="input-group-text"
            id="inputGroup-sizing-sm"
            type="button"
            onClick={() => handleClick()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-arrow-right-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
            </svg>
          </span>
        )}
      </div>
    </div>
  );

  return { searchDiv, output, generateRecord, generateTime };
};

export default useSearch;
