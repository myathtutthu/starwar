import React from "react";
class CastData extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const item = this.props;
    console.log(item);
    return (
      <React.Fragment>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {item.gender}
                  </h6>
                  <p className="card-text">
                    <ul className="detailsList">
                      <li>
                        <span className="bold">height:</span> {item.height}
                      </li>
                      <li>
                        <span className="bold">Hair Color:</span>{" "}
                        {item.hair_color}
                      </li>
                      <li>
                        <span className="bold">Eye Color:</span>{" "}
                        {item.eye_color}
                      </li>
                      <li>
                        <span className="bold">Birth Year:</span>{" "}
                        {item.birth_year}
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
      </React.Fragment>
    );
  }
}

export default CastData;
