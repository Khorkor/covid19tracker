import React from "react";
import withCovidReports from "../CovidReportProvider/hoc/withCovidReports";

import "./TotalRecoveredList.css";

const TotalRecoveredList = ({ reports, selectedRegion, regionalDetails }) => {
  console.log(regionalDetails);
  const totalRecovered =
    typeof regionalDetails.recovered === "number"
      ? regionalDetails.recovered
      : reports.reduce(
          (totalRecovered, report) => totalRecovered + report.recovered,
          0
        );

  const totalRecoveredListByStates = reports
    .filter(report => report.recovered > 0)
    .sort((a, b) => b.recovered - a.recovered)
    .filter(
      report => !selectedRegion || report.place.region === selectedRegion
    );

  return (
    <div className="total-recovered-list">
      <div className="total-recovered-list__header">
        <div className="total-recovered-list__header-inner">
          <h5 className="total-recovered-list__title">Total Recovered</h5>
          <h1 className="total-recovered-list__count">{totalRecovered}</h1>
        </div>
      </div>
      <div className="total-recovered-list__wrapper">
        {totalRecoveredListByStates.map(({ place, recovered }, index) => (
          <div key={index} className={"total-recovered-list__region"}>
            <div className="total-recovered-list__recovered-count">
              <strong>{recovered}</strong> recovered
            </div>{" "}
            <div className="total-recovered-list__region-name">
              <strong>
                {place.state && place.state !== place.region
                  ? `${place.state}, `
                  : ""}
              </strong>
              {place.region}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withCovidReports(TotalRecoveredList);
