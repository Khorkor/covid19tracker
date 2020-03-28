import React from "react";
import withCovidReports from "../CovidReportProvider/hoc/withCovidReports";

import { MDBDataTable } from "mdbreact";

const DataTable = ({ reports, selectedRegion, regionalDetails }) => {
  const totalRecoveredListByStates = reports
    .filter(report => report.recovered > 0)
    .sort((a, b) => b.recovered - a.recovered)
    .filter(
      report => !selectedRegion || report.place.region === selectedRegion
    );

  {
    totalRecoveredListByStates.map(({ place, recovered }, index) => (
      <div key={index} className={"total-recovered-list__region"}>
        <div className="total-recovered-list__region-name">
          <strong>
            {place.state && place.state !== place.region
              ? `${place.state}, `
              : ""}
          </strong>
          {place.region}
        </div>
      </div>
    ));
  }

  const data = {
    columns: [
      {
        label: "State, Region",
        field: "State, Region",
        sort: "asc",
        width: 150
      },
      {
        label: "Latitude",
        field: "Latitude",
        sort: "asc",
        width: 270
      },
      {
        label: "Longitude",
        field: "Longitude",
        sort: "asc",
        width: 200
      },
      {
        label: "Confirmed",
        field: "Confirmed",
        sort: "asc",
        width: 100
      },
      {
        label: "Active",
        field: "Active",
        sort: "asc",
        width: 150
      },
      {
        label: "Recovered",
        field: "Recovered",
        sort: "asc",
        width: 100
      },
      {
        label: "Deaths",
        field: "Deaths",
        sort: "asc",
        width: 100
      }
    ],
    rows: [
      {
        Confirmed: `{place.confirmed}`
      }
    ]
  };

  return <MDBDataTable striped bordered hover data={data} />;
};

export default withCovidReports(DataTable);
