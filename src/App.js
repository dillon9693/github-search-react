import React, { Component } from 'react';
import { get } from 'axios';

import AppBar from 'material-ui/AppBar';

import Results from './Results/Results';
import SearchBar from './SearchBar/SearchBar';
import SearchOptions from './SearchOptions/SearchOptions';

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

  async search(term) {
    if(!term) {
      this.setState({
        results: [],
        searchTerm: term
      });

      return;
    }

    try {
      const response = await get(`https://api.github.com/search/repositories?q=${term}&page=${this.state.currentPage}`);
      this.setState({
        results: response.data.items,
        searchTerm: term
      });
    }
    catch(e) {
      this.setState({
        results: [],
        searchTerm: term
      });
    }
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
