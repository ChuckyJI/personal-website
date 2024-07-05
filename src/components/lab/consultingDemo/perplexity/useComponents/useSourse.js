const useSource = (record) => {
  if (record.api_search === null) {
    return;
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
        }}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="list-timeline"
          className="svg-inline--fa fa-list-timeline fa-fw "
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="20"
          height="20"
        >
          <path
            fill="currentColor"
            d="M219.9 112H400V80H219.9l-16 16 16 16zm-72.6-4.7c-6.2-6.2-6.2-16.4 0-22.6l43.3-43.3c6-6 14.1-9.4 22.6-9.4H416c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H213.3c-8.5 0-16.6-3.4-22.6-9.4l-43.3-43.3zM64 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm0 160a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM32 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm187.9 16H400V400H219.9l-16 16 16 16zm-72.6-4.7c-6.2-6.2-6.2-16.4 0-22.6l43.3-43.3c6-6 14.1-9.4 22.6-9.4H416c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H213.3c-8.5 0-16.6-3.4-22.6-9.4l-43.3-43.3zM203.9 256l16 16H464V240H219.9l-16 16zm-13.3 54.6l-43.3-43.3c-6.2-6.2-6.2-16.4 0-22.6l43.3-43.3c6-6 14.1-9.4 22.6-9.4H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H213.3c-8.5 0-16.6-3.4-22.6-9.4z"
          ></path>
        </svg>
        <span
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            margin: "0 10px",
          }}
        >
          Source:
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "left",
          flexDirection: "row",
        }}
      >
        {Object.entries(record.api_search.news).map(
          ([url, { snippet, deepLinks }], index) => (
            <a
              style={{
                textDecorationLine: "none",
              }}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="card"
                style={{
                  width: "180px",
                  height: "90px",
                  margin: "15px 20px",
                  backgroundColor: "#f1f1f1",
                }}
              >
                <div
                  className="card-text"
                  style={{
                    fontSize: "12px",
                    height: "60px",
                    width: "100%",
                    fontWeight: "bold",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "normal",
                    padding: "5px 10px",
                  }}
                >
                  {snippet}
                </div>
                <div
                  style={{
                    position: "relative",
                    height: "30px",
                    width: "100%",
                    display: "flex",
                    textAlign: "center",
                  }}
                >
                  {deepLinks.length > 0 && (
                    <>
                      <button
                        className="btn btn-primary"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          padding: "0 5px",
                          margin: "5px",
                          position: "absolute",
                          bottom: "0",
                          left: "0",
                        }}
                        onClick={(e) => e.preventDefault()}
                      >
                        More
                      </button>

                      <div
                        className="offcanvas offcanvas-end"
                        tabIndex="-1"
                        id="offcanvasRight"
                        aria-labelledby="offcanvasRightLabel"
                        style={{ width: "500px" }}
                      >
                        <div className="offcanvas-header">
                          <h5
                            className="offcanvas-title"
                            id="offcanvasRightLabel"
                          >
                            More Information in this Website
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                            onClick={(e) => e.preventDefault()}
                          ></button>
                        </div>
                        <div className="offcanvas-body">
                          {Object.entries(deepLinks).map(
                            ({ snippet, url }, index) => (
                              <>
                                <div
                                  className="card"
                                  style={{ margin: "20px 0px" }}
                                >
                                  <a
                                    className="card-text-inside"
                                    style={{
                                      fontSize: "15px",
                                      height: "auto",
                                      width: "100%",
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      whiteSpace: "normal",
                                      padding: "5px 10px",
                                      textAlign: "left",
                                      textDecorationLine: "none",
                                      color: "black",
                                    }}
                                    href={deepLinks[index].url}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {deepLinks[index].snippet === "" ? (
                                      deepLinks[index].url
                                    ) : (
                                      <>
                                        {index + 1}. {deepLinks[index].snippet}
                                      </>
                                    )}
                                  </a>
                                </div>
                              </>
                            )
                          )}
                        </div>
                      </div>
                    </>
                  )}

                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      padding: "5px 10px",
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                    }}
                  >
                    {new URL(url).hostname.split(".").slice(-2, -1)} ·
                    {index + 1}
                  </span>
                </div>
              </div>
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default useSource;
