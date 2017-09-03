export const loadState = () => {
    try {
        const serializedState = window.localStorage.getItem('treningsprogram');
        if (serializedState === null) {
            return undefined;
        }
        return window.JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const { user, ...data } = state;
        const serializedState = window.JSON.stringify(data);
        window.localStorage.setItem('treningsprogram', serializedState);
    } catch (err) {
        // whocares.jpg
    }
};
