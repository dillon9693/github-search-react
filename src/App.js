import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

import Results from './Results/Results';
import SearchBar from './SearchBar/SearchBar';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      results: []
    };
  }

  render() {
    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title="Github Search React"
        />
        <div className="search-container">
          <SearchBar />
          <Results results={this.state.results} />
        </div>
      </div>
    );
  }
}

export default App;
