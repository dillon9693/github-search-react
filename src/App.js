import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title="Github Search React"
        />
      </div>
    );
  }
}

export default App;
