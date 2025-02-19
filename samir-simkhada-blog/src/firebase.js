import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj31Ey5X6-jLEl0hh5OyuicnidByCNP0g",
  authDomain: "samir-simkhada-blog.firebaseapp.com",
  projectId: "samir-simkhada-blog",
  storageBucket: "samir-simkhada-blog.firebasestorage.app",
  messagingSenderId: "1031246971970",
  appId: "1:1031246971970:web:f731adf73b3995a016d9db",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
