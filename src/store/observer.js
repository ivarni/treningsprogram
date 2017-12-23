import isEqual from 'lodash.isequal';

//import * as cloudStorage from './cloudStorage';
//import * as localStorage from './localStorage';

const stateChanged = (next, previous) =>
    !isEqual(next.config, previous.config) ||
    !isEqual(next.exercises, previous.exercises) ||
    !isEqual(next.program, previous.program);

export default (store) => {
    let currentState = store.getState();

    const handleChange = () => {
        const nextState = store.getState();
        if (nextState !== currentState) {
            if (stateChanged(nextState, currentState)) {
                //localStorage.saveState(nextState);
                if (nextState.user.authenticated) {
                    //cloudStorage.saveState(nextState);
                }
            }
            currentState = nextState;
        }
    };

    return store.subscribe(handleChange);
};
