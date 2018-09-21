import {
  FETCH_REPO_DATA,
  DELETE_REPO,
  FETCH_ERROR,
  RESET_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  repos: [],
  error: '',
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_REPO_DATA: {
      return { ...state, repos: [...state.repos, action.payload.data] };
    }
    case DELETE_REPO: {
      const newRepos = state.repos.filter((repo) => {
        if (repo.full_name === action.payload) {
          return false;
        }
        return true;
      });
      return { ...state, repos: newRepos };
    }
    case FETCH_ERROR: {
      return { ...state, error: action.payload };
    }
    case RESET_ERROR: {
      return { ...state, error: '' };
    }
    default: {
      return state;
    }
  }
}
