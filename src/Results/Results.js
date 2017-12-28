import React from 'react';

import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

import RepoResult from '../RepoResult/RepoResult';
import ResultPlaceholder from '../ResultPlaceholder/ResultPlaceholder';
import UserResult from '../UserResult/UserResult';

import loadingIcon from '../img/loading-icon.svg';

const Results = ({
  isLoading,
  results,
  searchType,
  searchTerm
}) => {
  return (
    <div className="results-container">
        {
          isLoading &&
            <div className='loading-overlay'>
              <img src={loadingIcon} alt='Loading' />
            </div>
        }
        {
          !isLoading ?
            searchTerm.length > 0 // if search term is set
            ? results.length > 0 // if there are any results
              ? results.map((result) => {
                  if(searchType === 'repositories') {
                    return <RepoResult key={result.id} result={result} />;
                  }
                  else if(searchType === 'users') {
                    return <UserResult key={result.id} result={result} />;
                  }

                  return null;
                })
              : <div>No results found for <span className="text-bold">{searchTerm}</span></div>
            : <div>Search for Github <span className='text-bold'>{searchType}</span> using the search bar above</div>
          : Array(5).fill().map((elem, index) => (
              <ReactPlaceholder key={index} ready={!isLoading} customPlaceholder={<ResultPlaceholder type={searchType} />}>
                <div></div>
              </ReactPlaceholder>
            ))
        }
    </div>
  );
};

export default Results;