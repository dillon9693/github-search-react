import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

import SearchBar from './SearchBar/SearchBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title="Github Search React"
        />
        <div className="search-container">
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
