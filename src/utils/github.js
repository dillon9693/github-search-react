/**
 * Github API functions
 */
import { get } from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

export const searchGithub = async (term = '', type = 'repositories', { sort = '', order = 'desc', page = 1 } = {}) => {
  if(!term) {
    return [];
  }

  try {
    const response = await get(`${GITHUB_API_URL}/search/${type}?q=${term}&page=${page}&sort=${sort}&order=${order}`);

    return response.data.items;
  }
  catch(e) {
    return [];
  }
};