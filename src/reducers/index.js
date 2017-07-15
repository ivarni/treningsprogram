import { combineReducers } from 'redux';

import config from './config';
import exercises from './exercises';
import program from './program';

const rootReducer = combineReducers({
    config,
    exercises,
    program,
});

export default rootReducer;
