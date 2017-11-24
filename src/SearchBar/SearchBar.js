import React from 'react';

import TextField from 'material-ui/TextField';

const sortFilterDict = {
  '': 'Best Match',
  'forks': 'Forks',
  'stars': 'Stars',
  'updated': 'Recently Updated'
};

const SearchBar = ({ handleSearchInput, sortFilter }) => {
  return (
    <div>
      <TextField
        floatingLabelText={`Search (sorted by ${sortFilterDict[sortFilter]})`}
        fullWidth
        onChange={(e) => handleSearchInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;