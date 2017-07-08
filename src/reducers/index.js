import { combineReducers } from 'redux';

import exercises from './exercises';

const rootReducer = combineReducers({
    exercises,
});

export default rootReducer;
