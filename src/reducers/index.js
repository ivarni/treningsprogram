import { combineReducers } from 'redux';

import config from './config';
import exercises from './exercises';
import program from './program';
import user from './user';

const rootReducer = combineReducers({
    config,
    exercises,
    program,
    user,
});

export default rootReducer;
