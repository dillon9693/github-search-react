/**
 * Github API functions
 */

export const searchRepositories = async (term, { sort: '', order: 'desc' }) => {
  if(!term) {
    return [];
  }
};