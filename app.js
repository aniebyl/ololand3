// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB7dqdtXB1Tws-aWnedn3znGWGMmWd56GE',
  authDomain: 'ololand2.firebaseapp.com',
  projectId: 'ololand2',
  storageBucket: 'ololand2.appspot.com',
  messagingSenderId: '1081382661331',
  appId: '1:1081382661331:web:f162e92155617c358cf826',
  measurementId: 'G-FW8FEMXZ1G',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
