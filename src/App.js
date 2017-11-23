import React, { Component } from 'react';
import { get } from 'axios';

import AppBar from 'material-ui/AppBar';

import Results from './Results/Results';
import SearchBar from './SearchBar/SearchBar';

import { searchRepositories } from './utils/github';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: 1,
      results: [],
      searchTerm: ''
    };

    this.searchDebounce = null;

    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSearchInput(term) {
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => this.search(term), 500);
  }

  async search(searchTerm) {
    const results = await searchRepositories(searchTerm);

    this.setState({
      results,
      searchTerm
    });
  }

  render() {
    const { searchTerm, results } = this.state;

    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title="Github Search React"
        />
        <div className="search-container">
          <SearchBar handleSearchInput={this.handleSearchInput} />
          {
            searchTerm.length > 0
            ? <Results results={results} searchTerm={searchTerm} />
            : <div className="results-empty">
                Search for Github repositories using the search bar above
              </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
