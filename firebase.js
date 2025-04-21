// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIBfGJBv_AjnTEdKqUyHlJhZ0Q9xjw5KA",
  authDomain: "syed-sardar-valli.firebaseapp.com",
  projectId: "syed-sardar-valli",
  storageBucket: "syed-sardar-valli.firebasestorage.app",
  messagingSenderId: "909207980216",
  appId: "1:909207980216:web:fba1a6eac2a19bb7348c4d",
  measurementId: "G-VG173RZ9J2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);