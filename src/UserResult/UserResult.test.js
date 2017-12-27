import React from 'react';

import UserResult from './UserResult';

import userMock from '../__mocks__/userMock';

describe('UserResult', () => {
  let props;
  let shallowUserResult;
  let mountedUserResult;

  const userResultShallow = () => {
    if(!shallowUserResult) {
      shallowUserResult = shallow(
        <UserResult {...props} />
      );
    }
    return shallowUserResult;
  };

  const userResultMounted = () => {
    if(!mountedRepoResut) {
      mountedUserResult = mount(
        <UserResult {...props} />
      );
    }    return mountedUserResult;
  };

  beforeEach(() => {
    props = {
      result: userMock
    };

    shallowUserResult = undefined;
    mountedUserResult = undefined;
  });

  it('should render a div with user-result class', () => {
    var div = userResultShallow().find('.user-result');
    expect(div.length).toEqual(1);
  });

  it('should render a link to the repository', () => {
    const link = userResultShallow().find('.user-result > a');
    expect(link.length).toEqual(1);
    expect(link.prop('href')).toEqual(userMock.html_url);
  });

  it('should render an avatar image and login from mock', () => {
    const avatarImg = userResultShallow().find('.avatar > img');
    expect(avatarImg.prop('src')).toEqual(userMock.avatar_url);
    expect(avatarImg.prop('alt')).toEqual(`${userMock.login} avatar`)
    expect(userResultShallow().find('.login').text()).toEqual(userMock.login);
  });
});
