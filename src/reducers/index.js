import { combineReducers } from 'redux';
import ReducerRepos from './reducer_repos';

const rootReducer = combineReducers({
  repoData: ReducerRepos,
});

export default rootReducer;
