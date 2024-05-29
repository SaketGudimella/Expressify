import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, ge } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
//add you credentials here
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

