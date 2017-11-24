import React from 'react';

import SearchOptions from './SearchOptions';

describe('SearchOptions', () => {
  let props;
  let shallowSearchOptions;
  let mountedSearchOptions;

  const searchOptionsShallow = () => {
    if(!shallowSearchOptions) {
      shallowSearchOptions = shallow(
        <SearchOptions {...props} />
      );
    }
    return shallowSearchOptions;
  };

  const searchOptionsMounted = () => {
    if(!mountedSearchOptions) {
      mountedSearchOptions = mount(
        <SearchOptions {...props} />
      );
    }
    return mountedSearchOptions;
  };

  beforeEach(() => {
    props = {
      handleSortFilterChange: () => false,
      handleToggle: () => false,
      open: false,
      sortFilter: ''
    };

    shallowSearchOptions = undefined;
    mountedSearchOptions = undefined;
  });
});