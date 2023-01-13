import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy3fR_6PMfEMKqXdy8mUm1jpDy9ARiPZ4",
  authDomain: "delicias-sandy.firebaseapp.com",
  projectId: "delicias-sandy",
  storageBucket: "delicias-sandy.appspot.com",
  messagingSenderId: "802572228878",
  appId: "1:802572228878:web:46dc2ddcec02275ca4df5f"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

