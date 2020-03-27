import React from "react";
import classnames from "classnames";

import withCovidReports from "../CovidReportProvider/hoc/withCovidReports";

import "./TotalConfirmedList.css";

const TotalConfirmedList = ({
  regionalReports,
  selectedRegion,
  regionalDetails,
  loading,
  selectRegion
}) => {
  if (loading) {
    return <div>Loading countries...</div>;
  }

  const totalConfirmedByRegion =
    typeof regionalDetails.confirmed === "number"
      ? regionalDetails.confirmed
      : regionalReports.reduce(
          (totalConfirmed, report) => totalConfirmed + report.confirmed,
          0
        );

  return (
    <>
      <div className="total-confirmed">
        <div className="total-confirmed__inner-container">
          <h5 className="total-confirmed__title">Total Confirmed</h5>
          <h1 className="total-confirmed__count">{totalConfirmedByRegion}</h1>
        </div>
      </div>
      <div className="confirmed-case-list">
        <div className="confirmed-case-list__title">
          Confirmed Cases by Country/Region/Sovereignty
        </div>
        <div className="confirmed-case-list__wrapper">
          {regionalReports.map(({ region, confirmed }) => (
            <p
              key={region}
              className={classnames("confirmed-case-list__region", {
                active: selectedRegion === region
              })}
              onClick={() => selectRegion(region)}
            >
              <span className="confirmed-case-list__confirmed-count">
                {confirmed}
              </span>{" "}
              <span className="confirmed-case-list__region-name">{region}</span>
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default withCovidReports(TotalConfirmedList);
