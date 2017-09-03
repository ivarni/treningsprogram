import * as firebase from 'firebase';

export const loadState = async () => {
    const { uid } = firebase.auth().currentUser;

    const snapshot = await firebase.database().ref(`users/${uid}`).once('value');
    return snapshot.val();
};

export const saveState = (state) => {
    const { uid } = firebase.auth().currentUser;
    const { user, ...data } = state;

    firebase.database().ref(`users/${uid}`).set(data);
};
