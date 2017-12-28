import React from 'react';

import RepoResultPlaceholder from './RepoResultPlaceholder';

describe('RepoResultPlaceholder', () => {
  let props;
  let shallowRepoResultPlaceholder;

  const repoResultShallow = () => {
    if(!shallowRepoResultPlaceholder) {
      shallowRepoResultPlaceholder = shallow(
        <RepoResultPlaceholder {...props} />
      );
    }
    return shallowRepoResultPlaceholder;
  };

  beforeEach(() => {
    props = {
      result: repositoryMock
    };

    shallowRepoResultPlaceholder = undefined;
  });
});