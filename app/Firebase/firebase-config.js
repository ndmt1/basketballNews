import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJyX_2kFvHhWsNUUcPga5k79Aj3WVV-cg",
  authDomain: "football-51b2e.firebaseapp.com",
  projectId: "football-51b2e",
  storageBucket: "football-51b2e.appspot.com",
  messagingSenderId: "375761669377",
  appId: "1:375761669377:web:6ea4279bb7442be3485f00",
  measurementId: "G-ZD3F2V0R7T"
};

const app = initializeApp(firebaseConfig);
export const authetication = getAuth(app);

