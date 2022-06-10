import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getFirestore} from "firebase/firestore";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAWgdsAg_xJtwSqXwMbfGdYvnwd5XZ809k",
  authDomain: "ic-data-71d08.firebaseapp.com",
  databaseURL: "https://ic-data-71d08-default-rtdb.firebaseio.com",
  projectId: "ic-data-71d08",
  storageBucket: "ic-data-71d08.appspot.com",
  messagingSenderId: "51933198989",
  appId: "1:51933198989:web:acbeb6aaff824bf26c00c4",
  measurementId: "G-Q7JEB4BLDC"
};


// 
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;
// const analytics = getAnalytics(app);