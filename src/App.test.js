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
});
