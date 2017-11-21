import React from 'react';

import Results from './Results';

import repositoryMock from '../__mocks__/repositoryMock';

describe('Results', () => {
  let props;
  let shallowResults;
  let mountedResults;

  const resultsShallow = () => {
    if(!shallowResults) {
      shallowResults = shallow(
        <Results {...props} />
      );
    }
    return shallowResults;
  };

  const resultsMounted = () => {
    if(!mountedResults) {
      mountedResults = mount(
        <Results {...props} />
      );
    }
    return mountedResults;
  };

  beforeEach(() => {
    props = {
      results: []
    };

    shallowResults = undefined;
    mountedResults = undefined;
  });

  it('should render a list', () => {
    var list = resultsShallow().find('ul');
    expect(list.length).toEqual(1);
  });

  it('should not render any RepoResult component', () => {
    var repoResults = resultsShallow().find('RepoResult');
    expect(repoResults.length).toEqual(0);
  });

  it('should render 1 RepoResult component', () => {
    props.results = [
      repositoryMock
    ];

    var repoResults = resultsShallow().find('RepoResult');
    expect(repoResults.length).toEqual(1);
  });

  it('should render 5 RepoResult component', () => {
    props.results = [
      repositoryMock, repositoryMock, repositoryMock,
      repositoryMock, repositoryMock
    ];

    var repoResults = resultsShallow().find('RepoResult');
    expect(repoResults.length).toEqual(5);
  });
});
