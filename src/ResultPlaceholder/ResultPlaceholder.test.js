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

  it('should render a div with repositories-result class when type is \'repositories\'', () => {
    var div = resultShallow();
    expect(div.hasClass('result')).toEqual(true);
    expect(div.hasClass('repositories-result')).toEqual(true);
  });

  it('should render a div with users-result class when type is \'users\'', () => {
    props.type = 'users';
    var div = resultShallow();
    expect(div.hasClass('result')).toEqual(true);
    expect(div.hasClass('users-result')).toEqual(true);
  });

  it('should render an anchor tag with href=\'#\'', () => {
    expect(resultShallow().children('a').prop('href')).toEqual('#');
  });

  it('should render a TextBlock component', () => {
    expect(resultShallow().find('a > TextBlock').length).toEqual(1);
  })

  it('should render a TextBlock component with rows prop set to 3 when type is \'repositories\'', () => {
    const textBlock = resultShallow().find('a > TextBlock');
    expect(textBlock.length).toEqual(1);
    expect(textBlock.prop('rows')).toEqual(3);
  });

  it('should render a TextBlock component with rows prop set to 1 when type is \'users\'', () => {
    props.type = 'users';
    const textBlock = resultShallow().find('a > TextBlock');
    expect(textBlock.length).toEqual(1);
    expect(textBlock.prop('rows')).toEqual(1);
  });

  it('should not render a RectShape component when type is \'repositories\'', () => {
    const rectShape = resultShallow().find('a > RectShape');
    expect(rectShape.length).toEqual(0);
  });

  it('should render a RectShape component when type is \'users\'', () => {
    props.type = 'users';
    const rectShape = resultShallow().find('a > RectShape');
    expect(rectShape.length).toEqual(1);
  });

});