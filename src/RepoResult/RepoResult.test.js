import React from 'react';

import RepoResult from './RepoResult';

import repositoryMock from '../__mocks__/repositoryMock';

describe('RepoResult', () => {
  let props;
  let shallowRepoResult;
  let mountedRepoResult;

  const repoResultShallow = () => {
    if(!shallowRepoResult) {
      shallowRepoResult = shallow(
        <RepoResult {...props} />
      );
    }
    return shallowRepoResult;
  };

  const repoResultMounted = () => {
    if(!mountedRepoResut) {
      mountedRepoResult = mount(
        <RepoResult {...props} />
      );
    }    return mountedRepoResult;
  };

  beforeEach(() => {
    props = {
      result: repositoryMock
    };

    shallowRepoResult = undefined;
    mountedRepoResult = undefined;
  });
});
