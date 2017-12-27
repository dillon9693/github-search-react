import React from 'react';

import SearchOptions from './SearchOptions';

import {
  GITHUB_API_TYPES,
  SORT_FILTER_SELECT_OPTIONS_BY_TYPE
} from '../utils/constants';

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
      searchType: 'repositories',
      sortFilter: ''
    };

    shallowSearchOptions = undefined;
    mountedSearchOptions = undefined;
  });

  it('renders a div with search-options class', () => {
    expect(searchOptionsShallow().find('.search-options').length).toEqual(1);
  });

  it('renders 2 SelectFields', () => {
    const selects = searchOptionsShallow().find('SelectField');
    expect(selects.length).toEqual(2);
  });

  it('renders the search type SelectField with 2 MenuItems', () => {
    const typeSelectField = searchOptionsShallow().find('SelectField')
                                                  .filterWhere(select => select.prop('id') === 'searchType');
    expect(typeSelectField.prop('value')).toEqual('repositories');

    const typeMenuItems = typeSelectField.find('MenuItem');
    expect(typeMenuItems.length).toEqual(2);

    for(let [index, key] of Object.keys(GITHUB_API_TYPES).entries()) {
      expect(typeMenuItems.get(index).props.value).toEqual(key);
    }
  });

  it('renders the sortFilter SelectField correctly when type is \'repositories\'', () => {
    const filterSelectField = searchOptionsShallow().find('SelectField')
                                                    .filterWhere(select => select.prop('id') === 'sortFilter');
    expect(filterSelectField.prop('value')).toEqual('');

    const filterMenuItems = filterSelectField.find('MenuItem');
    expect(filterMenuItems.length).toEqual(4);

    expect(filterMenuItems.get(0).props.value).toEqual('');

    for(let [index, key] of Object.keys(SORT_FILTER_SELECT_OPTIONS_BY_TYPE[props.searchType]).entries()) {
      expect(filterMenuItems.get(index + 1).props.value).toEqual(key);
    }
  });

  it('renders the sortFilter SelectField correctly when type is \'users\'', () => {
    props.searchType = 'users';

    const filterSelectField = searchOptionsShallow().find('SelectField')
                                                    .filterWhere(select => select.prop('id') === 'sortFilter');
    expect(filterSelectField.prop('value')).toEqual('');

    const filterMenuItems = filterSelectField.find('MenuItem');
    expect(filterMenuItems.length).toEqual(4);

    for(let [index, key] of Object.keys(SORT_FILTER_SELECT_OPTIONS_BY_TYPE[props.searchType]).entries()) {
      expect(filterMenuItems.get(index + 1).props.value).toEqual(key);
    }
  });

  it('displays the HardwareKeyboardArrowRight SVG icon when the search options panel is closed', () => {
    const panelContent = searchOptionsShallow().find('.search-options-toggle-panel-content IconButton HardwareKeyboardArrowRight');
    expect(panelContent.length).toEqual(1);
  });

  it('displays the HardwareKeyboardArrowDown SVG icon when the search options panel is open', () => {
    props.open = true;
    const panelContent = searchOptionsShallow().find('.search-options-toggle-panel-content IconButton HardwareKeyboardArrowDown');
    expect(panelContent.length).toEqual(1);
  });

  it('calls handleSortFilterChange function when the sort filter SelectField is changed', () => {
    props.handleSortFilterChange = jest.fn();
    const select = searchOptionsShallow().find('SelectField').filterWhere(select => select.prop('id') === 'sortFilter');
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
    const select = searchOptionsShallow().find('SelectField').filterWhere(select => select.prop('id') === 'sortFilter');
    expect(select.prop('value')).toEqual('forks');
  });
});