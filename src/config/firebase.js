import { initializeApp } from "firebase/app";
import {getFirestore}  from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCOrLeymk6ZM4OFKcZvKrbyx22Z916C0qo",
  authDomain: "tiktok---jornada-e5881.firebaseapp.com",
  projectId: "tiktok---jornada-e5881",
  storageBucket: "tiktok---jornada-e5881.appspot.com",
  messagingSenderId: "164838100575",
  appId: "1:164838100575:web:f1a3020bc30a927b8c15ea"
};

const app = initializeApp(firebaseConfig);
const db =getFirestore(app);

export default db;