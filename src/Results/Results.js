import React from 'react';

import RepoResult from '../RepoResult/RepoResult';

const Results = ({ results }) => {
  return (
    <div className="results-container">
      {
        results.map((result) => {
          return <RepoResult key={result.id} result={result} />
        })
      }
    </div>
  );
};

export default Results;