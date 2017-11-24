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

  it('renders a div with search-options class', () => {
    expect(searchOptionsShallow().find('.search-options').length).toEqual(1);
  });

  it('renders a SelectField with 4 MenuItem children', () => {
    const select = searchOptionsShallow().find('SelectField');
    expect(select.length).toEqual(1);
    const menuItems = select.find('MenuItem');
    expect(menuItems.length).toEqual(4);

    expect(menuItems.get(0).props.value).toEqual('');
    expect(menuItems.get(1).props.value).toEqual('forks');
    expect(menuItems.get(2).props.value).toEqual('stars');
    expect(menuItems.get(3).props.value).toEqual('updated');
  });

  it('calls handleSortFilterChange function when the sort filter SelectField is changed', () => {
    props.handleSortFilterChange = jest.fn();
    const select = searchOptionsShallow().find('SelectField');
    select.simulate('change');
    expect(props.handleSortFilterChange.mock.calls.length).toEqual(1);
  });

  it('calls the handleToggle function when the toggle panel is clicked', () => {
    props.handleToggle = jest.fn();
    const togglePanel = searchOptionsShallow().find('.search-options-toggle-panel').simulate('click');
    expect(props.handleToggle.mock.calls.length).toEqual(1);
  });

  it('sets the value of the SelectField when the sortFilter prop is set', () => {
    props.sortFilter = 'forks';
    expect(searchOptionsShallow().find('SelectField').prop('value')).toEqual('forks');
  });
});