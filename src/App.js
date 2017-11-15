import React, { Component } from 'react';
import { get } from 'axios';

import AppBar from 'material-ui/AppBar';

import Results from './Results/Results';
import SearchBar from './SearchBar/SearchBar';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentPage: 1,
      results: []
    };

    this.searchDebounce = null;

    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSearchInput(term) {
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => this.search(term), 500);
  }

  async search(term) {
    if(!term) {
      this.setState({
        results: []
      });

      return;
    }

    try {
      const response = await get(`https://api.github.com/search/repositories?q=${term}&page=${this.state.currentPage}`);

      if(response.data && response.data.items && response.data.items.length > 0) {
        this.setState({
          results: response.data.items
        });
      }
    }
    catch(e) {
      this.setState({
        results: []
      });
    }
  }


  render() {
    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title="Github Search React"
        />
        <div className="search-container">
          <SearchBar handleSearchInput={this.handleSearchInput} />
          <Results results={this.state.results} />
        </div>
      </div>
    );
  }
}

export default App;
