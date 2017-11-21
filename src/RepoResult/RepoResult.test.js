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

  it('should render a div with repo-result class', () => {
    var div = repoResultShallow().find('.repo-result');
    expect(div.length).toEqual(1);
  });

  it('should render a link to the repository', () => {
    const link = repoResultShallow().find('.repo-result > a');
    expect(link.length).toEqual(1);
    expect(link.prop('href')).toEqual(repositoryMock.html_url);
  });

  it('should render a title, owner, and description from mock', () => {
    expect(repoResultShallow().find('.title').text()).toEqual(repositoryMock.name);
    expect(repoResultShallow().find('.owner').text()).toEqual(repositoryMock.owner.login);
    expect(repoResultShallow().find('.description').text()).toEqual(repositoryMock.description);
  });
});
