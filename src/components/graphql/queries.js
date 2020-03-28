import { gql } from "apollo-boost";

export const LIST_REPORTS = gql`
  query ListReports {
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

export const GET_REPORT_DETAILS = gql`
  query GetReportDetails($placeId: ID!) {
    getReport(id: $placeId) {
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
