import { useState } from "react";
import history from "../history.json";

import jsonTest1 from "../sample/fakeresponse_96f29b9d-fd7e-40be-9d64-1ec86767924f.json";
import jsonTest2 from "../sample/fakeresponse_c7e5d3e8-9cbb-4e21-a3ea-fcac99e9222e.json";
import jsonTest3 from "../sample/fakeresponse_dd6957fb-1125-4f53-b50d-485cbfbf72d6.json";
import jsonTest4 from "../sample/fakeresponse_e74218dc-1bb3-4fba-8cb5-1702c5b6df7c.json";

const useHistory = () => {
  const [loadHistory, setLoadHistory] = useState(false);
  const [loadingTitle, setLoadingTitle] = useState("");
  const [offcanvas, setOffcanvas] = useState(false);

  const [outputTitle, setOutputTitle] = useState("");
  const [outputRecord, setOutputRecord] = useState({});

  const fetchHistory = async (title, address) => {
    try {
      // const response = await fetch(`sample/${address}`);
      // const data = await response.json();

      // This is for show.
      if (
        address === "./fakeresponse_96f29b9d-fd7e-40be-9d64-1ec86767924f.json"
      ) {
        var data = jsonTest1;
      }
      if (
        address === "./fakeresponse_c7e5d3e8-9cbb-4e21-a3ea-fcac99e9222e.json"
      ) {
        var data = jsonTest2;
      }
      if (
        address === "./fakeresponse_dd6957fb-1125-4f53-b50d-485cbfbf72d6.json"
      ) {
        var data = jsonTest3;
      }
      if (
        address === "./fakeresponse_e74218dc-1bb3-4fba-8cb5-1702c5b6df7c.json"
      ) {
        var data = jsonTest4;
      }

      setLoadHistory(true);
      setLoadingTitle(address);

      const fakeresponse = await new Promise((resolve) => {
        setTimeout(() => resolve("Fetched Data"), 1000);
      });

      setOutputTitle({ searchContent: title });
      setOutputRecord(data);
      setLoadHistory(false);
      setLoadingTitle("");
      setOffcanvas(true);
    } catch (error) {
      console.error("Error fetching or processing file:", error);
    }
  };

  const deleteTitle = async (address) => {
    try {
      const response = await fetch(`http://localhost:8001/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: `History_${address.split("_")[1].split(".")[0]}`,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  const deleteRecord = (event, address) => {
    event.stopPropagation();
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this record?"
    );

    if (isConfirmed) {
      deleteTitle(address);
    }
  };

  const historyDiv = (
    <>
      <a
        href="/lab/consultingdemo/churchexity"
        className="card"
        type="button"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40px",
          margin: "5px 10px 5px 0",
          backgroundColor: "#f1f1f1",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-left-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
        </svg>
      </a>
      <span
        className="card"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40px",
          margin: "5px 10px 5px 0",
          backgroundColor: "#f1f1f1",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-bullseye"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
          <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
        </svg>
      </span>

      <div
        className={`offcanvas offcanvas-start ${offcanvas ? "show" : ""}`}
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            History
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {Object.entries(history).map(([key, { title, address, time }]) => {
            return (
              <div
                className="historyButton"
                type="button"
                onClick={() => fetchHistory(title, address)}
              >
                <div style={{ fontWeight: "normal", fontSize: "18px" }}>
                  {loadHistory && loadingTitle === address ? (
                    <>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div
                          className="spinner-border"
                          role="status"
                          style={{ width: "18px", height: "18px" }}
                        ></div>
                        Loading ...
                      </span>
                    </>
                  ) : (
                    <>{title}</>
                  )}
                </div>
                <div
                  style={{
                    fontWeight: "normal",
                    fontSize: "16px",
                    color: "#a1a1a1",
                  }}
                >
                  {time}
                </div>
                <span
                  style={{ fontSize: "12px", fontWeight: "normal" }}
                  onClick={(e) => deleteRecord(e, address)}
                  type="button"
                  className="btn btn-danger"
                >
                  Delete
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );

  return { historyDiv, outputTitle, outputRecord };
};

export default useHistory;
