import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Detail from "../detail/Detail";
import Cast from "../cast/Cast";
import List from "./List.js";
import "./newMovies.css";

class NewMovies extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route
            exact
            path="/"
            component={props => <List {...props} name="movies" />}
          />
          <Route
            exact
            path={"/movie/:id"}
            component={props => <Detail {...props} name="movieDetail" />}
          />
          <Route
            exact
            path="/cast"
            component={props => <Cast {...props} name="castList" />}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default NewMovies;
