import React from 'react';
import { fetchDetailMovies } from "../../../actions/newDetailMovieAction";
import { connect } from "react-redux";
import './movie.css';

 class Detail extends React.Component {
  constructor(props) {
    super(props);
  }
  
    componentWillMount() {
        const id = window.location.pathname.substring(7);
        this.props.fetchDetailMovies(id);
      }

  

  render() {
    const movies = this.props.movieDetail;
    
    return(
      <div className="container">
        <div className="moviePage">
          <div className="poster">
            <img src="http://via.placeholder.com/300x450" alt='this' className="posterImg" />
          </div>

          <section className="movieDetails">
          <h2 className="sectionTitle">{movies.title}</h2>
            <ul className="detailsList">
              <li><span className="bold">Release date:</span> {movies.release_date}</li>
              <li><span className="bold">director:</span> {movies.director}</li>
              <li><span className="bold">producer:</span> {movies.producer}</li>
            </ul>
            
          </section>
        </div>{/* moviePage */}

        {/* <Cast cast={this.state.movie.credits.cast} /> */}
      </div>
    );
  }
}
const mapStateToProps = state => ({
    movieDetail: state.newMovies.currentMovie,
    

  });
  export default connect(
    mapStateToProps,
    { fetchDetailMovies }
  )(Detail);
