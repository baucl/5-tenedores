import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyD6-kuvXSgKlJsHWeHvLCl34-YnYNq5KPY",
  authDomain: "tenedores-a4fb8.firebaseapp.com",
  databaseURL: "https://tenedores-a4fb8.firebaseio.com",
  projectId: "tenedores-a4fb8",
  storageBucket: "tenedores-a4fb8.appspot.com",
  messagingSenderId: "72760166064",
  appId: "1:72760166064:web:8aae5d9e7036df6788dd75",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
