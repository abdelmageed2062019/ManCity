import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDRhp_3vQKU56wj5tD-JqBrCmGf8n1uILM",
    authDomain: "manblue-9d4f0.firebaseapp.com",
    databaseURL: "https://manblue-9d4f0.firebaseio.com",
    projectId: "manblue-9d4f0",
    storageBucket: "manblue-9d4f0.appspot.com",
    messagingSenderId: "32772320262",
    appId: "1:32772320262:web:2707006db8662af3172787",
    measurementId: "G-6Q335B6LHW"
  };

  firebase.initializeApp(firebaseConfig);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');
  const firebasePromotions = firebaseDB.ref('promotions');
  const firebaseTeams = firebaseDB.ref('teams');
  export {
      firebase,
      firebaseMatches,
      firebasePromotions,
      firebaseTeams,
      firebaseDB
  }