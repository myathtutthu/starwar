import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/newMovieActions';
import './newMovies.css';

class NewMovies extends React.Component {

  componentWillMount() {
    this.props.fetchMovies();
  }

  render() {
    const movies =this.props.newMovies
    console.log(movies);
    return(
      <section>
        <h2>New releases</h2>
        <div className="newMovies">
          {movies.map((movie, index) => {
            return (
              <Router>
              <Link to={`/movie/${movies[index]}`} key={index} className="movieLink">
                
                <div className="">
                  <h3>{movies[index].title}</h3>
                  <p>{movies[index].release_date}</p>
                </div>
              </Link>
              </Router>
            )
          })}
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => ({
  newMovies: state.newMovies.items,
});
export default connect(mapStateToProps, { fetchMovies })(NewMovies);


// {movies.map((movie, index) => {
//   return (
//     <Link to={`/movie/${movies[index].id}`} key={index} className="movieLink">
//       <img src={movies[index].poster_path === null ? 'http://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/w300/${this.state.movies[index].poster_path}`} alt={`${this.state.movies.title} poster`} className="imgResponsive" />
//       {}
//       <div className="movieInfo">
//         <h3>{movies[index].title}</h3>
//         <p>{movies[index].release_date}</p>
//       </div>
//     </Link>
//   )})}
