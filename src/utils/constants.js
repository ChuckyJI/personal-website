export const label = (
  collapseExample,
  Name,
  Language,
  Difficulty,
  Background,
  href
) => {
  return (
    <div className="container mt-2 mb-2">
      <div className="row">
        <div className="col-12">
          <div
            class="btn btn-block"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#" + collapseExample}
            aria-expanded="false"
            aria-controls={collapseExample}
            style={{
              width: "100%",
              backgroundColor: "rgba(222,222,222,0.7)",
            }}
          >
            <div className="row">
              <div className="col-3" style={{ textAlign: "left" }}>
                Project: {Name}
              </div>
              <div className="col-3" style={{ textAlign: "left" }}>
                {Language}
              </div>
              <div className="col-3">Difficulty: {Difficulty}/10</div>
              <div className="col-3" style={{ textAlign: "right" }}>
                More Details ↓
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div class="collapse" id={collapseExample}>
            <div
              class="card card-body d-flex justify-content-between align-items-end"
              style={{ textAlign: "left", lineHeight: 2 }}
            >
              <div>Background: {Background}</div>
              <div style={{ width: "100px" }} className="d-none d-sm-block">
                <a
                  className="btn btn-primary w-100"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  More ...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
