import React from 'react';

import RepoResult from '../RepoResult/RepoResult';

const Results = ({ results }) => {
  return (
    <ul className="results-container">
      {
        results.map((result) => {
          return <RepoResult key={result.id} result={result} />
        })
      }
    </ul>
  );
};

export default Results;