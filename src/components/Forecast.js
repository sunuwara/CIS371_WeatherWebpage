import React, { Component } from "react";
import ForecastItem from "./ForecastItem";
import PropTypes from "prop-types";

class Forecast extends Component {
  render() {
    return this.props.forecast.map((forecastItem) => (
      <ForecastItem key={forecastItem.number} forecastItem={forecastItem} />
    ));
  }
}

// PropTypes
Forecast.propTypes = {
  forecast: PropTypes.array.isRequired,
};

export default Forecast;
