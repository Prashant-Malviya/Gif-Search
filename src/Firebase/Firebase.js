// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA-ffzg4_sTbZq8qFU98aVEkEyQ7siQJzs",
  authDomain: "gif-search-259d9.firebaseapp.com",
  projectId: "gif-search-259d9",
  storageBucket: "gif-search-259d9.appspot.com",
  messagingSenderId: "743182701846",
  appId: "1:743182701846:web:832735e85d5086921aec37",
  measurementId: "G-9NVEZ9C136"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
// export default app;
// const analytics = getAnalytics(app);