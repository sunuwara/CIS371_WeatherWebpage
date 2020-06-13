import React, { Component } from "react";
import PropTypes from "prop-types";

class ForecastItem extends Component {
  render() {
    const {
      name,
      temperature,
      temperatureUnit,
      windSpeed,
      windDirection,
      icon,
      shortForecast,
    } = this.props.forecastItem;

    return (
      <div className="card shadow mb-3 rounded">
        <div className="card-header p-2" style={{ backgroundColor: "#b3d9ff" }}>
          <h5 className="blog-post mb-0 text-dark">{name}</h5>
        </div>

        <div className="card-body p-2" style={{ backgroundColor: "#f2f2f2" }}>
          <div className="row align-items-center justify-content-center">
            <div className="col text-center">
              <h1>
                {temperature}˚{temperatureUnit}
              </h1>
            </div>
            <div className="col-sm p-2 text-center">
              <img src={icon} alt="forecast" className="rounded-circle" />
            </div>
            <div className="col-sm p-1 text-center">
              <h6 className="card-text">{shortForecast}</h6>
            </div>
            <div className="col-sm p-2 text-center font-italic">
              <p className="card-text">
                {windDirection} wind at {windSpeed}.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// PropTypes
ForecastItem.propTypes = {
  forecastItem: PropTypes.object.isRequired,
};

export default ForecastItem;
