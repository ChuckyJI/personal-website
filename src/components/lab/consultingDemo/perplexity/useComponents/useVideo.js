import videoImage from "../static/backgrondImage.png";

const useVideo = (record) => {
  if (record.custom_search === null) {
    return;
  }

  const embed = require("@brightcrowd/embed-video");
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-camera-video-fill"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2z"
          />
        </svg>
        <span
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            margin: "0 10px",
          }}
        >
          Videos:
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "left",
        }}
      >
        {Object.entries(record.custom_search.videos).map(([url, snippet]) => (
          <>
            <div
              className="card"
              style={{
                width: "240px",
                margin: "15px 20px",
                height: "220px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  minHeight: "60px",
                  maxHeight: "60px",
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
              {embed(url) === undefined ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: "100%",
                    height: "150px",
                    margin: "10px 0",
                    fontSize: "24px",
                    fontWeight: "bold",
                    backgroundImage: `url(${videoImage})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecorationLine: "none",
                    color: "white",
                  }}
                >
                  {new URL(url).hostname.split(".").slice(-2, -1)}{" "}
                </a>
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: embed(url, {
                      attr: { width: "100%", height: "auto" },
                    }),
                  }}
                ></div>
              )}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default useVideo;
