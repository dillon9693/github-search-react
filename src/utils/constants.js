export const EMPTY_REPO_RESULT = {
  description: '',
  html_url: '',
  name: '',
  owner: {
    login: ''
  }
};

export const GITHUB_API_TYPES = {
  repositories: 'Repositories',
  users: 'Users'
};

export const SORT_FILTER_SELECT_OPTIONS_BY_TYPE = {
  repositories: {
    forks: 'Forks',
    stars: 'Stars',
    updated: 'Recently Updated'
  },
  users: {
    followers: 'Followers',
    joined: 'Recently Joined',
    repositories: 'Repositories',
  },
};