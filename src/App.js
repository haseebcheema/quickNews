import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  API = process.env.REACT_APP_API_KEY;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={2}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  API={this.API}
                  setProgress={this.setProgress}
                  key="general"
                  category={"General"}
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  API={this.API}
                  setProgress={this.setProgress}
                  key="business"
                  category={"Business"}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  API={this.API}
                  setProgress={this.setProgress}
                  key="entertainment"
                  category={"Entertainment"}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  API={this.API}
                  setProgress={this.setProgress}
                  key="health"
                  category={"Health"}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  API={this.API}
                  setProgress={this.setProgress}
                  key="science"
                  category={"Science"}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  API={this.API}
                  setProgress={this.setProgress}
                  key="sports"
                  category={"Sports"}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  API={this.API}
                  setProgress={this.setProgress}
                  key="technology"
                  category={"Technology"}
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
