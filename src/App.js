import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "./components/header";
import Labheader from "../src/components/lab/labheader";
import Footer from "./components/footer";
import Main from "./components/main";
import "./components/i18next";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdUnit from "../src/components/lab/worklab/adUnit";
import PresignedURL from "./components/lab/discoverylab/s3Presignurl";
import AutoScroolAds from "./components/lab/worklab/autoscrollAdTech";
import AutoPreviewUrlTesting from "./components/lab/worklab/autoPreviewUrlTesting";
import AdProject from "./components/lab/mllab/adProject";
import AndroidGame from "./components/lab/worklab/android";
import HRGraph from "./components/lab/consultingDemo/HRGraph/hrGraph";
import Purchase from "./components/lab/consultingDemo/Purchase/purchase";

const labelement = (path, Tag) => (
  <Route
    path={path}
    element={
      <>
        <Labheader />
        {Tag}
        <Footer />
      </>
    }
  />
);

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            {labelement("/lab/worklab/adunit", <AdUnit />)}
            {labelement("/lab/discoverylab/s3presignurl", <PresignedURL />)}
            {labelement("/lab/worklab/autoscrolladtech", <AutoScroolAds />)}
            {labelement(
              "/lab/worklab/autopreviewurltesting",
              <AutoPreviewUrlTesting />
            )}
            {labelement("/lab/mllab/adproject", <AdProject />)}
            {labelement("/lab/worklab/AndroidMatchGame", <AndroidGame />)}
            {labelement("/lab/consultingdemo/hrgraph", <HRGraph />)}
            {labelement("/lab/consultingdemo/purchase", <Purchase />)}
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Main />
                  <Footer />
                </>
              }
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
