import React from 'react';

import RepoResult from '../RepoResult/RepoResult';
import UserResult from '../UserResult/UserResult';

import loadingIcon from '../img/loading-icon.svg';

const Results = ({ isLoading, results, searchType, searchTerm }) => {
  return (
    <div className="results-container">
      {
        isLoading &&
          <div className='loading-overlay'>
            <img src={loadingIcon} alt='Loading' />
          </div>
      }
      {
        results.length > 0
        ? results.map((result) => {
            if(searchType === 'repositories') {
              return <RepoResult key={result.id} result={result} />;
            }
            else if(searchType === 'users') {
              return <UserResult key={result.id} result={result} />;
            }
          })
        : <div className="results-empty">No results found for "<span class="text-bold">{searchTerm}</span>".</div>
      }
    </div>
  );
};

export default Results;