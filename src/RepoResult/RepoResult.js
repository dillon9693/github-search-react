import React from 'react';

const RepoResult = ({ result }) => {
  return (
    <div className="result repo-result">
      <a href={result.html_url} target="_blank">
        <div className="title">{result.name}</div>
        <div className="owner">{result.owner.login}</div>
        <div className="description">{result.description}</div>
      </a>
    </div>
  );
};

export default RepoResult;