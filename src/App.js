import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

import Results from './Results/Results';
import SearchBar from './SearchBar/SearchBar';
import SearchOptions from './SearchOptions/SearchOptions';

import { searchRepositories } from './utils/github';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: 1,
      displayOptions: false,
      results: [],
      sortFilter: '',
      searchTerm: ''
    };

    this.searchDebounce = null;

    this.handleOptionsToggle = this.handleOptionsToggle.bind(this);
    this.handleSortFilterChange = this.handleSortFilterChange.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleOptionsToggle() {
    this.setState({
      displayOptions: !this.state.displayOptions
    });
  }

  handleSearchInput(term) {
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => this.search(term), 500);
  }

  handleSortFilterChange(event, index, value) {
    this.setState({
      sortFilter: value
    }, () => this.search(this.state.searchTerm));
  }

  async search(searchTerm) {
    const { displayOptions, sortFilter } = this.state;
    const options = {};

    if(displayOptions) {
      options.sort = sortFilter;
    }

    const results = await searchRepositories(searchTerm, options);

    this.setState({
      results,
      searchTerm
    });
  }

  render() {
    const { displayOptions, searchTerm, sortFilter, results } = this.state;
    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title="Github Search React"
        />
        <div className="search-container">
          <SearchBar handleSearchInput={this.handleSearchInput} />
          <SearchOptions
            handleSortFilterChange={this.handleSortFilterChange}
            handleToggle={this.handleOptionsToggle}
            open={displayOptions}
            sortFilter={sortFilter}
          />
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
