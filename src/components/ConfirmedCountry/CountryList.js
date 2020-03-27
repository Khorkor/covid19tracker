import React, { Component } from "react";
import DisplayCountries from "../ConfirmedCountry/DisplayCountries";

class CountryList extends Component {
  render() {
    return (
      <div>
        <ul id="country-list">
          <DisplayCountries />
        </ul>
      </div>
    );
  }
}

export default CountryList;
