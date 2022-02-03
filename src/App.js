import "./App.css";

import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App =()=> {
  const pageSize = 15;
  const apiKey="764c471f29b144ec9ae884be0a86f950";

  const [progress, setProgress] = useState(0);
 
    return (
      <div>
        <Router>
          <LoadingBar
          height={3}
            color="#f11946"
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Navbar />

          <Switch>
            <Route exact path="/">
              {" "}
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />{" "}
            </Route>
            <Route exact path="/business">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  
}

export default App;
