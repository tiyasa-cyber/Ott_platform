import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyCSoql6Zr4OGzMe7cQaI2d16Aas0RR6lwo",
  authDomain: "netflix-clone-6a53d.firebaseapp.com",
  projectId: "netflix-clone-6a53d",
  storageBucket: "netflix-clone-6a53d.firebasestorage.app",
  messagingSenderId: "321651222555",
  appId: "1:321651222555:web:8b201c70e97e33507d30be"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    }catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    }catch (error) {
        console.log(error);
         toast.error(error.code.split('/')[1].split('-').join(" "));

    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};