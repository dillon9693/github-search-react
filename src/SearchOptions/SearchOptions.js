import React from 'react';

import IconButton from 'material-ui/IconButton';
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

const styles = {
  'search-options': {
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
  },
  'search-options-panel': {
    maxHeight: '0',
    overflow: 'auto',
    padding: '0 10px',
    transition: 'max-height 800ms ease-in-out 0ms'
  },
  'search-options-panel-open': {
    maxHeight: '1000px'
  },
  'search-options-panel-content': {
    padding: '10px 0'
  },
  'search-options-toggle-panel': {
    backgroundColor: '#E8E8E8',
    border: '1px solid transparent',
    cursor: 'pointer',
    display: 'flex',
    height: '30px',
    justifyContent: 'space-between',
    padding: '0 12px'
  },
  'search-options-toggle-panel-content': {
    alignItems: 'center',
    display: 'flex',
    position: 'relative',

  }
};

const SearchOptions = ({ handleToggle, open }) => {
  const panelStyles =
    open
    ? {...styles['search-options-panel'], ...styles['search-options-panel-open']}
    : styles['search-options-panel'];

  return (
    <div style={styles['search-options']}>
      <div
        onClick={handleToggle}
        style={styles['search-options-toggle-panel']}
      >
        <div style={styles['search-options-toggle-panel-content']}>
          <IconButton>
          { open
            ? <ArrowDown />
            : <ArrowRight />
          }
          </IconButton>
          <span>Advanced Search</span>
        </div>
      </div>
      <div style={panelStyles}>
        <div style={styles['search-options-panel-content']}>
          <div>Search Contents</div>
        </div>
      </div>
    </div>
  );
}

export default SearchOptions;