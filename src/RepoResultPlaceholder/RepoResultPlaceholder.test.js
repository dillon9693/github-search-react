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
    props = {};

    shallowRepoResultPlaceholder = undefined;
  });

  it('should render a div with repo-result class', () => {
    var div = repoResultShallow();
    expect(div.hasClass('result')).toEqual(true);
    expect(div.hasClass('repo-result')).toEqual(true);
  });

  it('should render an anchor tag with href=\'javascript:void(0);\'', () => {
    expect(repoResultShallow().children('a').prop('href')).toEqual('javascript:void(0);');
  });

  it('should render a TextBlock component', () => {
    expect(repoResultShallow().find('a > TextBlock').length).toEqual(1);
  })
});