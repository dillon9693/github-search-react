import React from 'react';
import classNames from 'classnames';

const RepoResult = ({ result }) => {
  const descriptionClass = classNames({
    'description': true,
    'text-italic': !result.description
  });

  return (
    <div className="result repo-result">
      <a href={result.html_url} target="_blank">
        <div className="title">{result.name}</div>
        <div className="owner">{result.owner.login}</div>
        <div className={descriptionClass}>{result.description || 'No description provided'}</div>
      </a>
    </div>
  );
};

export default RepoResult;