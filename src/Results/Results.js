import React from 'react';

import RepoResult from '../RepoResult/RepoResult';

const Results = ({ results, searchTerm }) => {
  return (
    <div className="results-container">
      {
        results.length > 0
        ? results.map((result) => {
            return <RepoResult key={result.id} result={result} />
          })
        : <div className="results-empty">No results found for "<span class="text-bold">{searchTerm}</span>".</div>
      }
    </div>
  );
};

export default Results;