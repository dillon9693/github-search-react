import React from 'react';

import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

import './SearchOptions.css';

const SearchOptions = ({ handleToggle, open }) => {
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
            ? <ArrowDown />
            : <ArrowRight />
          }
          </IconButton>
          <span>Advanced Search</span>
        </div>
      </div>
      <div className={panelClasses}>
        <div className='search-options-panel-content'>
          <div>Search Contents</div>
        </div>
      </div>
    </div>
  );
}

export default SearchOptions;

function buildSortOptions() {
  return [
    <MenuItem key={1} value='' primaryText='Best Match' />,
    <MenuItem key={2} value='forks' primaryText='Forks' />,
    <MenuItem key={3} value='stars' primaryText='Stars' />,
    <MenuItem key={4} value='updated' primaryText='Last Updated' />
  ];
}