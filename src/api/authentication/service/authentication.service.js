import { authentication } from "../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";


export const loginRequest = (email, password) =>
    signInWithEmailAndPassword(authentication, email, password);
