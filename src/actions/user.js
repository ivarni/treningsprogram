export const LOGGED_IN = 'LOGGED_IN';
export const loggedIn = user => ({
    type: LOGGED_IN,
    user,
});

export const LOGGED_OUT = 'LOGGED_OUT';
export const loggedOut = () => ({
    type: LOGGED_OUT,
});

export const HYDRATE_STORE = 'HYDRATE_STORE';
export const hydrateStore = (config, exercises, program) => ({
    type: HYDRATE_STORE,
    config,
    exercises,
    program,
});
