import React, { Component } from "react";

import { withApollo } from "react-apollo";
import { LIST_REPORTS } from "../graphql/queries";

import groupBy from "lodash/groupBy";

export const CovidReportContext = React.createContext({
  regionalReports: [],
  reports: [],
  selectedRegion: null,
  regionalDetails: {},
  loading: false
});

const sumArrayValues = (array, field) =>
  array.reduce((total, item) => total + item[field], 0);

class CovidReportProvider extends Component {
  state = {
    reports: [],
    regionalReports: [],
    selectedRegion: null,
    regionalDetails: {},
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const { data } = await this.props.client.query({
      query: LIST_REPORTS
    });

    const regionalGroupedReports = groupBy(data.listReports, "place.region");
    const regionalReports = Object.keys(regionalGroupedReports).reduce(
      (result, region) => {
        const reports = regionalGroupedReports[region];
        return [
          ...result,
          {
            region,
            confirmed: sumArrayValues(reports, "confirmed"),
            recovered: sumArrayValues(reports, "recovered"),
            deaths: sumArrayValues(reports, "deaths"),
            active: sumArrayValues(reports, "active")
          }
        ];
      },
      []
    );

    this.setState({
      reports: data.listReports,
      regionalReports,
      loading: false
    });
  }

  selectRegion = region => {
    const { selectedRegion, regionalReports } = this.state;

    if (selectedRegion !== region) {
      this.setState({
        regionalDetails:
          regionalReports.find(report => report.region === region) || {},
        selectedRegion: region
      });
    } else {
      this.setState({ regionalDetails: {}, selectedRegion: null });
    }
  };

  render() {
    const providedValues = {
      ...this.state,
      selectRegion: this.selectRegion
    };

    return (
      <CovidReportContext.Provider value={providedValues}>
        {this.props.children}
      </CovidReportContext.Provider>
    );
  }
}

export default withApollo(CovidReportProvider);
