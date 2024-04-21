import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "./components/header";
import Labheader from "../src/components/lab/labheader";
import Footer from "./components/footer";
import Main from "./components/main";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdUnit from "../src/components/lab/worklab/adUnit";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route
              path="/lab/worklab/adunit"
              element={
                <>
                  <Labheader />
                  <AdUnit />
                  <Footer />
                </>
              }
            />
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
