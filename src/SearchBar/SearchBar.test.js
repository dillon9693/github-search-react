import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SearchBar from './SearchBar';

import { SORT_FILTER_SELECT_OPTIONS_BY_TYPE } from '../utils/constants';

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
    props = {
      searchType: 'repositories',
      sortFilter: ''
    };

    shallowSearchBar = undefined;
    mountedSearchBar = undefined;
  });

  it('should render a TextField component', () => {
    const textField = searchBarShallow().find('TextField');
    expect(textField.length).toEqual(1);
  });

  it('should render a label with \'Sorted by Best Match\' when the sort filter is empty', () => {
    const sortedByText = 'Best Match';

    const textField = searchBarMounted().find('TextField');
    expect(textField.find('label').text()).toEqual(`Search (sorted by ${sortedByText})`);
  });

  it('should render a label with \'Sorted by Forks\' when the sort filter is forks', () => {
    props.sortFilter = 'forks';
    const sortedByText = SORT_FILTER_SELECT_OPTIONS_BY_TYPE[props.searchType][props.sortFilter];

    const textField = searchBarMounted().find('TextField');
    expect(textField.find('label').text()).toEqual(`Search (sorted by ${sortedByText})`);
  });

  it('should render a label with \'Sorted by Stars\' when the sort filter is stars', () => {
    props.sortFilter = 'stars';
    const sortedByText = SORT_FILTER_SELECT_OPTIONS_BY_TYPE[props.searchType][props.sortFilter];

    const textField = searchBarMounted().find('TextField');
    expect(textField.find('label').text()).toEqual(`Search (sorted by ${sortedByText})`);
  });

  it('should render a label with \'Sorted by Recently Updated\' when the sort filter is updated', () => {
    props.sortFilter = 'updated';
    const sortedByText = SORT_FILTER_SELECT_OPTIONS_BY_TYPE[props.searchType][props.sortFilter];

    const textField = searchBarMounted().find('TextField');
    expect(textField.find('label').text()).toEqual(`Search (sorted by ${sortedByText})`);
  });

  it('should call the handleSearchInput function when text is entered', () => {
    props.handleSearchInput = jest.fn();

    searchBarShallow().find('TextField').simulate('change', { target: { value: 'test' } });
    expect(props.handleSearchInput.mock.calls.length).toEqual(1);
  });
});
