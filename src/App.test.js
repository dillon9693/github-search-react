import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';

describe('App', () => {
  let props;
  let shallowApp;
  let mountedApp;

  const appShallow = () => {
    if(!shallowApp) {
      shallowApp = shallow(
        <App {...props} />
      );
    }
    return shallowApp;
  };

  const appMounted = () => {
    if(!mountedApp) {
      mountedApp = mount(
        <MuiThemeProvider>
          <App {...props} />
        </MuiThemeProvider>
      );
    }
    return mountedApp;
  };

  beforeEach(() => {
    props = {};

    shallowApp = undefined;
    mountedApp = undefined;
  });

  it('should render an AppBar component', () => {
    const appBar = appShallow().find('AppBar');
    expect(appBar.length).toEqual(1);
  });

  it('should render a SearchBar component', () => {
    const searchBar = appShallow().find('SearchBar');
    expect(searchBar.length).toEqual(1);
  });

  it('should not render a Results component if the search term is empty', () => {
    const results = appShallow().find('Results');
    expect(results.length).toEqual(0);
  });
});
