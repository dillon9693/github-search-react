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

  it('should render a div with repositories-result class', () => {
    var div = repoResultShallow().find('.repositories-result');
    expect(div.length).toEqual(1);
  });

  it('should render a link to the repository', () => {
    const link = repoResultShallow().find('.repositories-result > a');
    expect(link.length).toEqual(1);
    expect(link.prop('href')).toEqual(repositoryMock.html_url);
  });

  it('should render a title, owner, and description from mock', () => {
    expect(repoResultShallow().find('.title').text()).toEqual(repositoryMock.name);
    expect(repoResultShallow().find('.owner').text()).toEqual(repositoryMock.owner.login);
  });

  it('should render the description with only the \'description\' class when the description is set', () => {
    const description = repoResultShallow().find('.description');

    expect(description.hasClass('description')).toEqual(true);
    expect(description.hasClass('text-italic')).toEqual(false);
    expect(description.text()).toEqual(repositoryMock.description);
  });

  it('should render the description with the \'description\' and \'text-italic\' classes when the description is not set', () => {
    props.result.description = null;

    const description = repoResultShallow().find('.description');

    expect(description.hasClass('description')).toEqual(true);
    expect(description.hasClass('text-italic')).toEqual(true);
    expect(description.text()).toEqual('No description provided');
  });
});
