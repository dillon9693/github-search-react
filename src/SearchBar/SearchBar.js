import React from 'react';

import TextField from 'material-ui/TextField';

const SearchBar = ({ handleSearchInput }) => {
  return (
    <div className="search-bar">
      <TextField
        floatingLabelText="Search"
        fullWidth
        onChange={(e) => handleSearchInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;