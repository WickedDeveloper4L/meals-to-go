import * as firebase from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
  apiKey: "AIzaSyBHGZzxn9YnihMfHR7ziCfQHoAdlx5Gc3M",
  authDomain: "mealstogo-22c1e.firebaseapp.com",
  projectId: "mealstogo-22c1e",
  storageBucket: "mealstogo-22c1e.appspot.com",
  messagingSenderId: "293080969381",
  appId: "1:293080969381:web:1815422ef368dff8519d4c",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
