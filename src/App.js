import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import CountryList from "./components/ConfirmedCountry/CountryList";

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="table-wrapper-scroll-y my-custom-scrollbar">
          <h1>Total Confirmed</h1>

          <CountryList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
