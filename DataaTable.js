import React from "react";
import withCovidReports from "../CovidReportProvider/hoc/withCovidReports";

import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const DataTable = ({ reports }) => {
  const columns = [
    {
      name: "StateRegion",
      label: "StateRegion",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "Latitude",
      label: "Latitude",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "Longitude",
      label: "Longitude",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "Confirmed",
      label: "Confirmed",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "Active",
      label: "Active",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "Recovered",
      label: "Recovered",
      options: {
        filter: true,
        sort: true
      }
    },
    {
      name: "Deaths",
      label: "Deaths",
      options: {
        filter: true,
        sort: true
      }
    }
  ];

  const options = {
    filterType: "checkbox"
  };

  const data = [
    ...reports.map((data, id) => ({
      StateRegion:
        data.place.state && data.place.state !== data.place.region
          ? data.place.state + " " + data.place.region
          : data.place.region,
      Latitude: data.place.latitude,
      Longitude: data.place.longitude,
      Confirmed: data.confirmed,
      Active: data.active,
      Recovered: data.recovered,
      Deaths: data.deaths
    }))
  ];

  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTableBodyCell: {
          root: {
            backgroundColor: "black",
            color: "white"
          }
        }
      }
    });

  return (
    <div>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable options={options} data={data} columns={columns} />
      </MuiThemeProvider>
    </div>
  );
};

export default withCovidReports(DataTable);
