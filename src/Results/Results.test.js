import React from 'react';

import Results from './Results';

import repositoryMock from '../__mocks__/repositoryMock';
import userMock from '../__mocks__/userMock';

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
      isLoading: false,
      searchTerm : 'test',
      searchType: 'repositories',
      results: []
    };

    shallowResults = undefined;
    mountedResults = undefined;
  });

  it('should render a div with results-container class', () => {
    var list = resultsShallow().find('div.results-container');
    expect(list.length).toEqual(1);
  });

  it('should not render a loading overlay when isLoading prop is false', () => {
    expect(resultsShallow().find('.loading-overlay').length).toEqual(0);
  });

  it('should render a loading overlay when isLoading prop is true', () => {
    props.isLoading = true;

    const overlay = resultsShallow().find('.loading-overlay');
    expect(overlay.length).toEqual(1);

    const overlaySpinnerImg = overlay.find('img');
    expect(overlaySpinnerImg.length).toEqual(1);
    expect(overlaySpinnerImg.prop('src')).toEqual('loading-icon.svg');
  });

  it('should render a single div when the searchTerm prop is not set', () => {
    props.searchTerm = '';
    const div = resultsShallow().find('.results-container > div');
    expect(div.length).toEqual(1);
  });

  it('should render a single div when the results array prop is empty', () => {
    const div = resultsShallow().find('.results-container > div');
    expect(div.length).toEqual(1);
  });

  describe('Repositories search', () => {
    it('should not render a RepoResult component', () => {
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

  describe('Users search', () => {
    beforeEach(() => {
      props.searchType = 'users';
    });

    it('should not render a UserResult component', () => {
      var userResults = resultsShallow().find('UserResult');
      expect(userResults.length).toEqual(0);
    });

    it('should render 1 UserResult component', () => {
      props.results = [
        userMock
      ];

      var userResults = resultsShallow().find('UserResult');
      expect(userResults.length).toEqual(1);
    });

    it('should render 5 UserResult component', () => {
      props.results = [
        userMock, userMock, userMock,
        userMock, userMock
      ];

      var userResults = resultsShallow().find('UserResult');
      expect(userResults.length).toEqual(5);
    });
  });
});
