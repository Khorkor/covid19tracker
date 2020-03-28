import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { useQuery } from "@apollo/react-hooks";

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

const CountryDetail = props => {};

export default graphql(DetailReport)(CountryDetail);
