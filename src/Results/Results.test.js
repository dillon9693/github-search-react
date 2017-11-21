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
    props = {};

    shallowResults = undefined;
    mountedResults = undefined;
  });

  it('should render a list', () => {
    var list = resultsShallow().find('ul');
    expect(list.length).toEqual(1);
  });
});
