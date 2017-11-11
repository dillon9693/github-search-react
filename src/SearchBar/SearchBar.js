import React from 'react';

import TextField from 'material-ui/TextField';

const SearchBar = (props) => {
  return (
    <div class="search-bar">
      <TextField
        floatingLabelText="Search"
        fullWidth
      />
    </div>
  );
};

export default SearchBar;