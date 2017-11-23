import axios from 'axios';
import mockAdapter from 'axios-mock-adapter';

import { GITHUB_API_URL, searchRepositories } from '../github';
import repositoryMock from '../../__mocks__/repositoryMock';

let axiosMock;

describe('Github API functions', () => {
  describe('searchRepositories', () => {
    beforeEach(() => {
      axiosMock = new mockAdapter(axios);
    });
  });
});