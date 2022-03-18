//firebase deploy --only hosting:my-learning
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAtXkQKr9OiRg7jPvot5RKl_Uw7V3Bqckg",
  authDomain: "mylearning-a6270.firebaseapp.com",
  projectId: "mylearning-a6270",
  storageBucket: "mylearning-a6270.appspot.com",
  messagingSenderId: "105141229633",
  appId: "1:105141229633:web:68092d46115e7dec058ec0"
};


const app = initializeApp(firebaseConfig);