 import * as firebase from "firebase";

//inicializa tu base de datos
const firebaseConfig = {
  apiKey: "AIzaSyBpxyqeoiWzWPZzR8bPauxU0CvtagtpF8Q",
  authDomain: "proyecto60-addd1.firebaseapp.com",
  databaseURL: "https://proyecto60-addd1-default-rtdb.firebaseio.com",
  projectId: "proyecto60-addd1",
  storageBucket: "proyecto60-addd1.appspot.com",
  messagingSenderId: "331849613258",
  appId: "1:331849613258:web:dbee428e1f94dcb25bd933"
};

  firebase.initializeApp(firebaseConfig);

export default firebase.database();
 

  