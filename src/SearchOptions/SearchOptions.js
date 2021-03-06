import React from 'react';

import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import SelectField  from 'material-ui/SelectField';

import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

import {
  GITHUB_API_TYPES,
  SORT_FILTER_SELECT_OPTIONS_BY_TYPE
} from '../utils/constants';

import './SearchOptions.css';

const SearchOptions = ({
  handleSearchTypeChange,
  handleSortFilterChange,
  handleToggle,
  open,
  searchType,
  sortFilter
}) => {
  const panelClasses =
    open
    ? 'search-options-panel search-options-panel-open'
    : 'search-options-panel';

  return (
    <div className='search-options'>
      <div
        onClick={handleToggle}
        className='search-options-toggle-panel'
      >
        <div className='search-options-toggle-panel-content'>
          <IconButton>
          { open
            ? <HardwareKeyboardArrowDown />
            : <HardwareKeyboardArrowRight />
          }
          </IconButton>
          <span>Filters</span>
        </div>
      </div>
      <div className={panelClasses}>
        <div className='search-options-panel-content'>
          <SelectField
            floatingLabelText='Type'
            floatingLabelFixed
            id='searchType'
            onChange={handleSearchTypeChange}
            value={searchType}
          >
            {buildSearchTypeOptions()}
          </SelectField>

          <SelectField
            floatingLabelText='Sort By'
            floatingLabelFixed
            id='sortFilter'
            onChange={handleSortFilterChange}
            value={sortFilter}
          >
            {buildSortOptions(searchType)}
          </SelectField>
        </div>
      </div>
    </div>
  );
}

export default SearchOptions;

function buildSearchTypeOptions() {
  return Object.keys(GITHUB_API_TYPES).map(key => <MenuItem key={key} value={key} primaryText={GITHUB_API_TYPES[key]} />);
}

function buildSortOptions(type) {
  return [
    <MenuItem key={''} value='' primaryText='Best Match' />,
    ...Object.keys(SORT_FILTER_SELECT_OPTIONS_BY_TYPE[type])
          .map(key => <MenuItem key={key} value={key} primaryText={SORT_FILTER_SELECT_OPTIONS_BY_TYPE[type][key]} />)
  ];

}