import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"


const config = {
    apiKey: "AIzaSyBndlsq_zzcJjXBXXuobU98KZmmgvA6ifY",
    authDomain: "mojera-blog.firebaseapp.com",
    databaseURL: "https://mojera-blog.firebaseio.com",
    projectId: "mojera-blog",
    storageBucket: "mojera-blog.appspot.com",
    messagingSenderId: "537295121591",
    appId: "1:537295121591:web:2ff48ee4a06ba50183b132",
    measurementId: "G-137V4ESDHK"
};
firebase.initializeApp(config);
firebase.firestore();

export default firebase;