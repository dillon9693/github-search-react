/**
 * Github API functions
 */

export const searchRepositories = async (term, { sort = '', order = 'desc', page = 1 } = {}) => {
  if(!term) {
    return [];
  }
};