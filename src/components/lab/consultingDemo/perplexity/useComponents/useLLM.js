import { useEffect, useState } from "react";
import markdownit from "markdown-it";

const useLLM = (chatContent) => {
  const md = markdownit();

  const [chatFinal, setChatFinal] = useState();

  useEffect(() => {
    if (chatContent && chatContent.length > 0) {
      let text = "";
      let index = 0;
      const intervalId = setInterval(() => {
        text += chatContent[index].answer;
        setChatFinal(md.render(text));
        index += 1;
        if (index === chatContent.length) {
          clearInterval(intervalId);
        }
      }, 5);
    }
  }, [chatContent]);

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
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
          />
        </svg>
        <span
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            margin: "0 10px",
          }}
        >
          LLM Answers:
        </span>
      </div>
      <div>
        {chatContent === undefined ? (
          ""
        ) : (
          <div dangerouslySetInnerHTML={{ __html: chatFinal }}></div>
        )}
      </div>
    </div>
  );
};

export default useLLM;
