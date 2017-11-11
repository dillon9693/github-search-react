import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  let props;
  let shallowSearchBar;
  let mountedSearchBar;

  const searchBarShallow = () => {
    if(!shallowSearchBar) {
      shallowSearchBar = shallow(
        <SearchBar {...props} />
      );
    }
    return shallowSearchBar;
  };

  const searchBarMounted = () => {
    if(!mountedSearchBar) {
      mountedSearchBar = mount(
        <MuiThemeProvider>
          <SearchBar {...props} />
        </MuiThemeProvider>
      );
    }
    return mountedSearchBar;
  };

  beforeEach(() => {
    props = {};

    shallowSearchBar = undefined;
    mountedSearchBar = undefined;
  });
});
