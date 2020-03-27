import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import CovidReportProvider from "./components/CovidReportProvider/CovidReportProvider";

import TotalConfirmedList from "./components/TotalConfirmed/TotalConfirmedList";
import TotalDeathsList from "./components/TotalDeaths/TotalDeathsList";
import TotalRecoveredList from "./components/TotalRecovered/TotalRecoveredList";

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <CovidReportProvider>
          <div className="full-container">
            <div className="row">
              <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                <TotalConfirmedList />
              </div>
              <div
                className="col-6 col-sm-6 col-md-6 col-lg-6"
                style={{ alignSelf: "center", textAlign: "center" }}
              >
                <h1 style={{ flex: 1 }}>Harita ya da filtrelenebilir tablo </h1>
              </div>
              <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                <TotalDeathsList />
              </div>
              <div className="col-2 col-sm-2 col-md-2 col-lg-2">
                <TotalRecoveredList />
              </div>
            </div>
          </div>
        </CovidReportProvider>
      </ApolloProvider>
    );
  }
}

export default App;
