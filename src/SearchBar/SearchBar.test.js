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

  it('should render a TextField component', () => {
    const textField = searchBarShallow().find('TextField');
    expect(textField.length).toEqual(1);
  });

  it('should call the handleSearchInput function when text is entered', () => {
    props.handleSearchInput = jest.fn();

    searchBarShallow().find('TextField').simulate('change', { target: { value: 'test' } });
    expect(props.handleSearchInput.mock.calls.length).toEqual(1);
  });
});
