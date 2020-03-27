import React from "react";
import withCovidReports from "../CovidReportProvider/hoc/withCovidReports";

import "./TotalDeathsList.css";

const TotalDeathsList = ({ reports, selectedRegion, regionalDetails }) => {
  const totalDeaths =
    typeof regionalDetails.deaths === "number"
      ? regionalDetails.deaths
      : reports.reduce((totalDeaths, report) => totalDeaths + report.deaths, 0);

  const totalDeathsListByStates = reports
    .filter(report => report.deaths > 0)
    .sort((a, b) => b.deaths - a.deaths)
    .filter(
      report => !selectedRegion || report.place.region === selectedRegion
    );

  return (
    <div className="total-deaths-list">
      <div className="total-deaths-list__header">
        <div className="total-deaths-list__header-inner">
          <h5 className="total-deaths-list__title">Total deaths</h5>
          <h1 className="total-deaths-list__count">{totalDeaths}</h1>
        </div>
      </div>
      <div className="total-deaths-list__wrapper">
        {totalDeathsListByStates.map(({ place, deaths }, index) => (
          <div key={index} className={"total-deaths-list__region"}>
            <div className="total-deaths-list__deaths-count">
              <strong>{deaths}</strong> deaths
            </div>{" "}
            <div className="total-deaths-list__region-name">
              {place.state && place.state !== place.region ? (
                <strong>{place.state},</strong>
              ) : (
                ""
              )}
              {place.region}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withCovidReports(TotalDeathsList);
