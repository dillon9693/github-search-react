import React from 'react';

import RepoResult from './RepoResult';

import { EMPTY_REPO_RESULT } from '../utils/constants';
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
  });

  it('should render empty strings for html_url, title, owner, and description when the result prop is the EMPTY_REPO_RESULT constant', () => {
    props.result = EMPTY_REPO_RESULT;
    expect(repoResultShallow().find('a').prop('href')).toEqual(EMPTY_REPO_RESULT.html_url);
    expect(repoResultShallow().find('.title').text()).toEqual(EMPTY_REPO_RESULT.name);
    expect(repoResultShallow().find('.owner').text()).toEqual(EMPTY_REPO_RESULT.owner.login);
    expect(repoResultShallow().find('.description').text()).toEqual('No description provided');
  });

  it('should render the description with only the \'description\' class when the description is set', () => {
    const description = repoResultShallow().find('.description');

    expect(description.hasClass('description')).toEqual(true);
    expect(description.hasClass('text-italic')).toEqual(false);
    expect(description.text()).toEqual(repositoryMock.description);
  });

  it('should render the description with only the \'description\' class when the description is set', () => {
    props.result.description = '';

    const description = repoResultShallow().find('.description');

    expect(description.hasClass('description')).toEqual(true);
    expect(description.hasClass('text-italic')).toEqual(true);
    expect(description.text()).toEqual('No description provided');
  });
});
