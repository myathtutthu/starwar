import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCasts } from "../../../actions/castListActions";

class Cast extends React.Component {
  componentWillMount() {
    this.props.fetchCasts();
  }

  render() {
    const casts = this.props.casts;
    const fullyLoaded = this.props.fullyLoaded;
    console.log(casts);
    return (
      <React.Fragment>
      <Link to='/' key="cast" className="movieLink">
        <p>back to home</p>
        </Link>
      <div className="row">
        {/* <h4>Cast List Series</h4> */}
        {casts.map(item => (
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.gender}</h6>
                <p className="card-text">
                  <ul className="detailsList">
                    <li>
                      <span className="bold">height:</span> {item.height}
                    </li>
                    <li>
                      <span className="bold">Hair Color:</span> {item.hair_color}
                    </li>
                    <li>
                      <span className="bold">Eye Color:</span> {item.eye_color}
                    </li>
                    <li>
                      <span className="bold">Birth Year:</span> {item.birth_year}
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  casts: state.newMovies.casts,
  fullyLoaded: state.newMovies.fullyLoaded
});
export default connect(
  mapStateToProps,
  { fetchCasts }
)(Cast);
