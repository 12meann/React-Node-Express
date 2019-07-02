import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Images from "./components/infiniteScroll/Images";
import Navbar from "./components/Navbar";
import BlogApp from "./components/pagination/BlogApp";
import FileUpload from "./components/fileUpload/FileUpload";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/infinitescroll" component={Images} />
          <Route exact path="/pagination" component={BlogApp} />
          <Route exact path="/fileupload" component={FileUpload} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
