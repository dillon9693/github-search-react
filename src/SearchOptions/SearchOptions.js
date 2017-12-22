import React from 'react';

import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import SelectField  from 'material-ui/SelectField';

import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

import './SearchOptions.css';

const SearchOptions = ({
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
            floatingLabelText='Sort By'
            floatingLabelFixed
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

function buildSortOptions(type) {
  const sortOptionsByType = {
    repositories: {
      'Best Match': '',
      'Forks': 'forks',
      'Stars': 'stars',
      'Recently Updated': 'updated'
    },
  };

  return Object.keys(sortOptionsByType[type])
              .map((key, index) => {
                console.log(key);
                return <MenuItem key={index} value={sortOptionsByType[type][key]} primaryText={key} />
              });
}