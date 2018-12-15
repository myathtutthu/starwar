import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovies } from "../actions/newMovieActions";
import Detail from "../detail/Detail";
import List from "./List";
import "./newMovies.css";

class NewMovies extends React.Component {
  render() {
    return (
      <section>
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
          </React.Fragment>
        </Router>
      </section>
    );
  }
}

export default NewMovies;
