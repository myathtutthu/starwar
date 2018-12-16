import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStarShipList } from "../../../actions/starshipListActions";
import "../../../assets/loading.css";
import StarshipData from "./StarshipData";

class Starship extends React.Component {
  componentWillMount() {
    this.scrollListener = window.addEventListener("scroll", e => {
      this.handleScroll(e);
    });
    this.props.fetchStarShipList(this.props.starshipPage);
  }
  loadMore = () => {
    
    let pageCount=this.props.starshipPage
    if(pageCount <= 4){
      this.props.fetchStarShipList(pageCount);
    }
  };
  handleScroll = () => {
    console.log("ads");
    this.loadMore();
  };

  render() {
    const starships = this.props.starships;
    const fullyLoaded = this.props.fullyLoaded;
    console.log(starships);
    return (
      <React.Fragment>
         <div className={fullyLoaded==true ? 'hide' : 'loading'}>
          <div className="spinner-wrapper">
            <span className="spinner-text">LOADING</span>
            <span className="spinner" />
          </div>
        </div>
        <Link to="/" key="starshipList" className="movieLink">
          <p>back to home</p>
        </Link>
        <div className="row">
          {starships.map(contact => (
            <div className="col-md-3" key={contact.name}>
              <StarshipData {...contact} />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  starships: state.newMovies.starships,
  fullyLoaded: state.newMovies.fullyLoaded,
  starshipPage: state.newMovies.starshipPage
});
export default connect(
  mapStateToProps,
  { fetchStarShipList }
)(Starship);
