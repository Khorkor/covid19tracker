import React, { useState, useEffect } from "react";
import withCovidReports from "../CovidReportProvider/hoc/withCovidReports";

import MUIDataTable from "mui-datatables";

const DataTable = ({ reports }) => {
  const [state, setState] = useState([]);

  const columns = [
    "StateRegion",
    "Latitude",
    "Longitude",
    "Confirmed",
    "Active",
    "Recovered",
    "Deaths"
  ];

  const data = [
    ...reports.map((data, id) => ({
      StateRegion: (
        <span>
          {data.place.state && data.place.state !== data.place.region
            ? `${data.place.state}, `
            : ""}{" "}
          {data.place.region}
        </span>
      ),
      Latitude: <span key={id}>{data.place.latitude}</span>,
      Longitude: <span key={id}>{data.place.longitude}</span>,
      Confirmed: <span key={id}>{data.confirmed}</span>,
      Active: <span key={id}>{data.active}</span>,
      Recovered: <span key={id}>{data.recovered}</span>,
      Deaths: <span key={id}>{data.deaths}</span>
    }))
  ];

  return (
    <div>
      <MUIDataTable data={data} columns={columns} />
    </div>
  );
};

export default withCovidReports(DataTable);
