import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovies } from "../actions/newMovieActions";
import Detail from "../detail/Detail";
import "./newMovies.css";

class List extends React.Component {
  componentWillMount() {
    this.props.fetchMovies();
  }

  render() {
    const movies = this.props.newMovies;
    console.log(movies);
    return (
      <section>
        <h2>Starwar Movies Series</h2>
        <div className="newMovies">
          {movies.map((movie, index) => {
            return (
              
                <React.Fragment>
                  <Link to={`/movie/${index}`} key={index} className="movieLink">
                    <img
                      src="http://via.placeholder.com/300x450"
                      alt={`${movies[index].title} poster`}
                      className="imgResponsive"
                    />
                    <div className="movieInfo">
                      <h3>{movies[index].title}</h3>
                      <p>{movies[index].release_date}</p>
                    </div>
                  </Link>
                </React.Fragment>
              
            );
          })}
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => ({
  newMovies: state.newMovies.items
});
export default connect(
  mapStateToProps,
  { fetchMovies }
)(List);
