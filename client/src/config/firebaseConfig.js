import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDP2fLXC0toljDZ9a0ciXwvjcmqCdJULGM",
  authDomain: "sunhair-3145c.firebaseapp.com",
  projectId: "sunhair-3145c",
  storageBucket: "sunhair-3145c.appspot.com",
  messagingSenderId: "848723067047",
  appId: "1:848723067047:web:da438c52c4306e96ed1b82",
  measurementId: "G-SPFPSGG3Y3",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, "gs://sunhair-3145c.appspot.com");
export default storage;
