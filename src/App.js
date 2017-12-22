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
      displaySearchOptions: false,
      results: [],
      sortFilter: '',
      searchTerm: '',
      searchType: 'repositories'
    };

    this.searchDebounce = null;
  }

  handleSearchInput = (term) => {
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => this.search(term), 500);
  }

  handleSearchOptionsToggle = () => {
    this.setState({
      displaySearchOptions: !this.state.displaySearchOptions
    });
  }

  handleSearchTypeChange = (event, index, value) => {
    // search type didn't actually change
    if(value === this.state.searchType) {
      return;
    }

    this.setState({
      searchTerm: '',
      searchType: value,
      sortFilter: ''
    });
  }

  handleSortFilterChange = (event, index, value) => {
    this.setState({
      sortFilter: value
    }, () => this.search(this.state.searchTerm));
  }

  async search(searchTerm) {
    const { displaySearchOptions, sortFilter } = this.state;
    const options = {};

    if(displaySearchOptions) {
      options.sort = sortFilter;
    }

    const results = await searchRepositories(searchTerm, options);

    this.setState({
      results,
      searchTerm
    });
  }

  render() {
    const { displaySearchOptions, searchTerm, searchType, sortFilter, results } = this.state;

    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title="Github Search React"
        />
        <div className="search-container">
          <SearchBar
            handleSearchInput={this.handleSearchInput}
            sortFilter={sortFilter}
          />
          <SearchOptions
            handleSearchTypeChange={this.handleSearchTypeChange}
            handleSortFilterChange={this.handleSortFilterChange}
            handleToggle={this.handleSearchOptionsToggle}
            open={displaySearchOptions}
            sortFilter={sortFilter}
            searchType={searchType}
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
