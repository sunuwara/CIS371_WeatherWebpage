import React, { Component } from "react";
import Forecast from "./Forecast";

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      forecastUri: null,
      forecast: [],
    };
  }

  // Get the user position and Query for the grid forecast uri
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.success, this.error);
  }

  success = (pos) => {
    fetch(
      `https://api.weather.gov/points/${pos.coords.latitude},${pos.coords.longitude}`
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          forecastUri: result["properties"]["forecast"],
        });
      })
      .catch((error) => this.error(error));
  };

  error = (e) => {
    console.warn(`ERROR(${e.code}): ${e.message}`);
    this.setState({
      error: true,
      isLoaded: false,
      forecastUri: null,
      forecast: [],
    });
  };

  // Query for 14 day forecast
  componentDidUpdate(prevProps, prevState) {
    if (prevState.isLoaded !== this.state.isLoaded) {
      fetch(`${this.state.forecastUri}`)
        .then((res) => res.json())
        .then((result) => {
          this.setState({ forecast: result["properties"]["periods"] });
        })
        .catch((error) => this.error(error));
    }
  }

  render() {
    if (this.state.error === true) {
      return (
        <div class="alert alert-danger pt-2" role="alert">
          Oops! Something went wrong, please try again!
        </div>
      );
    }

    return (
      <div className="forecast-body" style={{ marginTop: "1em" }}>
        <Forecast forecast={this.state.forecast} />
      </div>
    );
  }
}

export default Location;
