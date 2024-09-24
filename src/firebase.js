import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBMYWQRP1hu-xBsfgN6cU-2XDQgNXuwdxU",
  authDomain: "fir-ee858.firebaseapp.com",
  projectId: "fir-ee858",
  storageBucket: "fir-ee858.appspot.com",
  messagingSenderId: "457307632216",
  appId: "1:457307632216:web:0a99c58e9aba3742e5902d"
};


export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)