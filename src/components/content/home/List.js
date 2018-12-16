import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovies } from "../../../actions/newMovieActions";
import "./newMovies.css";
import "../../../assets/loading.css";
import jsonData from "../../../assets/images";

class List extends React.Component {
  componentWillMount() {
    this.props.fetchMovies();
  }

  render() {
    const moviesOld = this.props.newMovies;
    const movies = [];
    {
      moviesOld.map(movie => {
        let str = movie.url.substring(27);
        movie.urlID = str.replace("/", "");
        movies.push(movie);
      });
    }
    console.log(movies);
    const fullyLoaded = this.props.fullyLoaded;
    console.log(fullyLoaded);
    return (
      <section>
        <div className={fullyLoaded == true ? "hide" : "loading"}>
          <div className="spinner-wrapper">
            <span className="spinner-text">LOADING</span>
            <span className="spinner" />
          </div>
        </div>
        <h3>Starwar Movies Series</h3>
        <span> <Link to={`/cast`} key="cast" className="movieLink">
        &#160;Cat List&nbsp;
        </Link>
        </span>
        <span>
        <Link to={`/starships`} key="starships" className="movieLink">
        &#160;Starship List&nbsp;
        </Link>
        </span>
       
        <div className="newMovies">
          {movies.map((movie, index) => {
            return (
              <Link
                to={`/movie/${movies[index].urlID}`}
                key={index}
                className="movieLink"
              >
                <img
                  src={jsonData.image[index].url}
                  alt={`${movies[index].title} poster`}
                  className="imgStyle"
                />
                <div className="movieInfo">
                  <h3>{movies[index].title}</h3>
                  <p>{movies[index].release_date}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => ({
  newMovies: state.newMovies.items,
  fullyLoaded: state.newMovies.fullyLoaded
});
export default connect(
  mapStateToProps,
  { fetchMovies }
)(List);
