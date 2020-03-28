import React from "react";
import PropTypes from "prop-types";
import { CovidReportContext } from "../CovidReportProvider";

const withCovidReports = WrappedComponent => {
  const CovidReportConsumer = ({ ...props }) => (
    <CovidReportContext.Consumer>
      {providedValues => <WrappedComponent {...props} {...providedValues} />}
    </CovidReportContext.Consumer>
  );

  CovidReportConsumer.propTypes = {
    reports: PropTypes.arrayOf(
      PropTypes.shape({
        place: PropTypes.shape({
          id: PropTypes.number,
          state: PropTypes.string,
          region: PropTypes.string,
          latitude: PropTypes.number,
          longitude: PropTypes.number
        }),
        confirmed: PropTypes.number,
        recovered: PropTypes.number,
        deaths: PropTypes.number,
        active: PropTypes.number,
        lastUpdate: PropTypes.string
      })
    ),
    loading: PropTypes.bool
  };

  return CovidReportConsumer;
};
export default withCovidReports;
