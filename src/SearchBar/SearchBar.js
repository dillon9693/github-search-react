import React from 'react';

import TextField from 'material-ui/TextField';

const SearchBar = ({ handleSearchInput }) => {
  return (
    <div>
      <TextField
        floatingLabelText="Search"
        fullWidth
        onChange={(e) => handleSearchInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;