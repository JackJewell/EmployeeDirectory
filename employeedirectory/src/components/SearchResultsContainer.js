import React, { Component } from "react";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultsContainer extends Component {
  state = {
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchApi();
  }

  searchApi() {
    API.getRandomEmployees()
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultsContainer;
