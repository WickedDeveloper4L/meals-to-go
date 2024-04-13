import { auth } from "./firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = async (email, password) =>
  await signInWithEmailAndPassword(auth, email, password);
