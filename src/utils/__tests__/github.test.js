import axios from 'axios';
import mockAdapter from 'axios-mock-adapter';

import { searchGithub } from '../github';
import repositoryMock from '../../__mocks__/repositoryMock';

let axiosMock;

describe('Github API functions', () => {
  describe('searchGithub', () => {
    beforeEach(() => {
      axiosMock = new mockAdapter(axios);
    });

    it('should return an empty array if the term isn\'t set', async () => {
      const results = await searchGithub();
      expect(results).toEqual([]);
    });

    it('should return an empty array if the term is the empty string', async () => {
      const results = await searchGithub('');
      expect(results).toEqual([]);
    });

    it('should return an empty array of no results are returned from the API', async () =>{
      axiosMock.onGet().reply(200, {
        items: []
      });

      const results = await searchGithub('test');
      expect(results.length).toEqual(0);
    });

    it('should return an array of elements when searching', async () => {
      axiosMock.onGet().reply(200, {
        items: [
          repositoryMock,
          repositoryMock
        ]
      });

      const results = await searchGithub('test');
      expect(results.length).toEqual(2);
    });
  });
});