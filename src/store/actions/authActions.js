

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();


        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });

        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });

        });



    }
}
export const  resetPassword = (resetEmail) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        const auth = firebase.auth();
        auth.sendPasswordResetEmail(resetEmail).then(function() {


        }).then(() => {
            dispatch({ type: 'RESET_PASSWORD_SUCCESS' });
        }).catch(function(error) {
            console.log(error)
            dispatch({ type: 'RESET_PASSWORD_ERROR' });
        });

    }
}


export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();



            firebase.auth().createUserWithEmailAndPassword(
                newUser.email,
                newUser.password
            ).then(resp => {
                firebase.auth().currentUser.sendEmailVerification().then(function() {
                    return firestore.collection('user').doc(resp.user.uid).set({
                        fullName:newUser.firstName + newUser.lastName,
                        initials: newUser.firstName[0] + newUser.firstName[1]

                    })}).then(() => {
                    dispatch({ type: 'SIGNUP_SUCCESS' });
                }).catch((err) => {
                    dispatch({ type: 'SIGNUP_ERROR', err});
                });

            })


    }
}
export const signUpGoogle = () => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const provider = new firebase.auth.GoogleAuthProvider()
        const firestore = getFirestore();
        firebase.auth().signInWithPopup(provider).then(function(result) {

            console.log(result.user)
            return firestore.collection('user').doc(result.user.uid).set({
                fullName:result.user.displayName,
                initials: result.user.displayName[0] +result.user.displayName[1]


            })

        }).then(() => {
            dispatch({ type: 'SIGNUP_GOOGLE_SUCCESS' });
        }).catch(function(error) {
            dispatch({ type: 'SIGNUP_GOOGLE_ERROR', error});
        });




    }
}

