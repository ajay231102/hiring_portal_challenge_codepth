import firebase from './firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyCA0KXzCjiA8tcUitwSlAHaL9H9KT5UQaY",
  authDomain: "portal-fadb5.firebaseapp.com",
  projectId: "portal-fadb5",
  storageBucket: "portal-fadb5.appspot.com",
  messagingSenderId: "287802974386",
  appId: "1:287802974386:web:40dbe46d49b3e549d329ab",
  measurementId: "G-ZFHW96Z6C5"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const messaging = firebase.messaging();

export const getToken = async () => {
  const currentToken = await messaging.getToken();
  if (currentToken) {
    console.log('FCM Token:', currentToken);
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
};

export default firebase;