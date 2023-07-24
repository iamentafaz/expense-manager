// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyC7v-GsGJ8WVYOQGgj9B3J_CX_r9Qnem8g',
    authDomain: 'fintrack-app-91a74.firebaseapp.com',
    projectId: 'fintrack-app-91a74',
    storageBucket: 'fintrack-app-91a74.appspot.com',
    messagingSenderId: '243178175787',
    appId: '1:243178175787:web:fcc23e6da17e64480f996e',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
