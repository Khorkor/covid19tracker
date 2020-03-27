import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { useQuery } from "@apollo/react-hooks";
import "./DisplayCountry.css";

const getListReports = gql`
  {
    listReports {
      place {
        id
        state
        region
        latitude
        longitude
      }
      confirmed
      recovered
      deaths
      active
      lastUpdate
    }
  }
`;

const DetailReport = gql`
  {
    getReport(id: KONUM_IDSI) {
      place {
        id
        state
        region
        latitude
        longitude
      }
      confirmed
      recovered
      deaths
      active
      lastUpdate
    }
  }
`;

const ClickCountry = props => {};

const DisplayCountries = () => {
  const { loading, data } = useQuery(getListReports);
  //const { total, setTotal } = useState(total);
  if (loading) {
    return <div>Loading countries...</div>;
  } else {
    return data.listReports.map(country => {
      return (
        <div key={country.place.id}>
          <table className="table table-bordered mb-0">
            <thead>
              <tr>Country ID: {country.place.id}</tr>
            </thead>
            <tbody>
              <tr>Confirmed: {country.confirmed}</tr>
              <tr>
                <p
                  style={{ color: "blue" }}
                  onClick={e => ClickCountry(country.place.id)}
                >
                  Country: {country.place.region}
                </p>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
      );
    });
  }
};

export default graphql(getListReports)(DisplayCountries);
