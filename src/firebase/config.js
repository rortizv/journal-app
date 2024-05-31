import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey:            "AIzaSyDWgjXr5jA5MTo3GCLOw4D7HuiGWb9IxBg",
    authDomain:        "raph-learning.firebaseapp.com",
    projectId:         "raph-learning",
    storageBucket:     "raph-learning.appspot.com",
    messagingSenderId: "384933090946",
    appId:             "1:384933090946:web:befe5b52efa6836264c69b"
};

export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);