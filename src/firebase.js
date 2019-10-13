import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAuSuCFldqd590EGwaEk-8zPEiK4oxP8as",
  authDomain: "vue-hq-66b28.firebaseapp.com",
  databaseURL: "https://vue-hq-66b28.firebaseio.com",
  projectId: "vue-hq-66b28",
  storageBucket: "vue-hq-66b28.appspot.com",
  messagingSenderId: "481515647243",
  appId: "1:481515647243:web:c0df423145adc17ef3320e",
  measurementId: "G-2BZDJEDP3W"
});

export const db = firebaseApp.firestore();
