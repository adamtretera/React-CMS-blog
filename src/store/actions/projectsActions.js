import moment from "moment";

require('moment/locale/cs');


export const createProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
        const date = moment().locale("cs").format('LL');
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorName: profile.fullName,
            authorId: authorId,
            createdAt: date

    }).then(() => {
            dispatch({ type: 'CREATE_PROJECT_SUCCESS' });

        }).catch(err => {
            dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
        });
    }
};
export const deleteProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();

        firestore.collection('projects').doc(
            project
        ).delete().then(() => {
            dispatch({ type: 'DELETE_PROJECT_SUCCESS' });

        }).catch(err => {
            dispatch({ type: 'DELETE_PROJECT_ERROR' }, err);
        });
    }
};

