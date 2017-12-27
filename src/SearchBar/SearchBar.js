import React from 'react';

import TextField from 'material-ui/TextField';

import { SORT_FILTER_SELECT_OPTIONS_BY_TYPE } from '../utils/constants';

const SearchBar = ({
  handleSearchInput,
  searchType,
  sortFilter
}) => {
  const sortedBy = sortFilter
                    ? SORT_FILTER_SELECT_OPTIONS_BY_TYPE[searchType][sortFilter]
                    : 'Best Match';

  return (
    <div>
      <TextField
        floatingLabelText={`Search (sorted by ${sortedBy})`}
        fullWidth
        onChange={handleSearchInput}
      />
    </div>
  );
};

export default SearchBar;