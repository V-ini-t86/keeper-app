import * as firebase from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjN-njNo_mn-y4mARW8lgJ36D2rOuZhcE",
  authDomain: "signin-with-32d3f.firebaseapp.com",
  projectId: "signin-with-32d3f",
  storageBucket: "signin-with-32d3f.appspot.com",
  messagingSenderId: "418746805604",
  appId: "1:418746805604:web:248b201c1cd34e830f5e71",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { provider, auth };
export default app;
