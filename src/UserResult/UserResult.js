import React from 'react';

const UserResult = ({ result }) => {
  return (
    <div className="result users-result">
      <a href={result.html_url} target="_blank">
        <div className="avatar">
          <img src={result.avatar_url} alt={`${result.login} avatar`} />
        </div>
        <div className="login">{result.login}</div>
      </a>
    </div>
  );
};

export default UserResult;