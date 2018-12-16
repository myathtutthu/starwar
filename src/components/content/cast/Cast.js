import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCasts } from "../../../actions/castListActions";
import "../../../assets/loading.css";
import CastData from "./CastData";

class Cast extends React.Component {
  componentWillMount() {
    this.scrollListener = window.addEventListener("scroll", e => {
      this.handleScroll(e);
    });
    this.props.fetchCasts(this.props.castPage);
  }
  loadMore = () => {
    
    let pageCount=this.props.castPage
    if(pageCount <= 9){
      this.props.fetchCasts(pageCount);
    }
    // if (this.props.casts.next != null) {
    //   console.log(this.props.castPage + "hello");
    // }
  };
  handleScroll = () => {
    console.log("ads");
    this.loadMore();
    // var lastLi = document.querySelector("ul.contacts > li:last-child");
    // var lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    // var pageOffset = window.pageYOffset + window.innerHeight;
    // var bottomOffset = 20;
    // if (pageOffset > lastLiOffset - bottomOffset) {

    // }
  };

  render() {
    const casts = this.props.casts;
    const fullyLoaded = this.props.fullyLoaded;
    console.log(casts);
    return (
      <React.Fragment>
         <div className={fullyLoaded==true ? 'hide' : 'loading'}>
          <div className="spinner-wrapper">
            <span className="spinner-text">LOADING</span>
            <span className="spinner" />
          </div>
        </div>
        <Link to="/" key="cast" className="movieLink">
          <p>back to home</p>
        </Link>
        <div className="row">
          {/* <ul className="contacts contact-container"> */}
          {casts.map(contact => (
            <div className="col-md-3" key={contact.name}>
              <CastData {...contact} />
            </div>
          ))}
          {/* </ul> */}
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  casts: state.newMovies.casts,
  fullyLoaded: state.newMovies.fullyLoaded,
  castPage: state.newMovies.castPage
});
export default connect(
  mapStateToProps,
  { fetchCasts }
)(Cast);
