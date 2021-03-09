import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware,compose} from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux"
import thunk from "redux-thunk";
import {createFirestoreInstance, getFirestore, reduxFirestore} from "redux-firestore";
import {getFirebase, ReactReduxFirebaseProvider} from "react-redux-firebase";
import firebase from "firebase";
import fbConfig from "./config/fbConfig"
import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';
import GlobalStyle from "./styles/GlobalStyles";
import Theme from "./styles/Theme";
import {ThemeProvider} from "styled-components"
import Loader from "./components/layout/elements/Loader";
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
        reduxFirestore(firebase, fbConfig),

    )
);

const rrfConfig = {
    userProfile: "user",
    useFirestoreForProfile: true,
    attachAuthIsReady: true
};
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}
function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth);

    if (!isLoaded(auth)) return <div className={"center"}>asd.</div>;
    return children
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
            <ThemeProvider theme={Theme}>
                <GlobalStyle/>
                <App />
            </ThemeProvider>
        </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
        </Provider>,
    document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
