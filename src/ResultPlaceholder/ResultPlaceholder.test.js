import React from 'react';

import ResultPlaceholder from './ResultPlaceholder';

describe('ResultPlaceholder', () => {
  let props;
  let shallowResultPlaceholder;

  const resultShallow = () => {
    if(!shallowResultPlaceholder) {
      shallowResultPlaceholder = shallow(
        <ResultPlaceholder {...props} />
      );
    }
    return shallowResultPlaceholder;
  };

  beforeEach(() => {
    props = {
      type: 'repositories'
    };

    shallowResultPlaceholder = undefined;
  });

  it('should render a div with repositories-result class', () => {
    var div = resultShallow();
    expect(div.hasClass('result')).toEqual(true);
    expect(div.hasClass('repositories-result')).toEqual(true);
  });

  it('should render an anchor tag with href=\'javascript:void(0);\'', () => {
    expect(resultShallow().children('a').prop('href')).toEqual('javascript:void(0);');
  });

  it('should render a TextBlock component', () => {
    expect(resultShallow().find('a > TextBlock').length).toEqual(1);
  })
});