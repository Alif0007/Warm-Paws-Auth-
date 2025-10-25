import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/firebaseConfig';


const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();

    const [user,setUser] = useState(null)


    const createUser = (email,password) => {
      return  createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser =(email,password) =>{
        return signInWithEmailAndPassword (auth,email,password)
    }
    
    const googleSignIn = () =>{
        return  signInWithPopup(auth, googleProvider)

    }


    const authData = {
        user,
        setUser,
        createUser,
        signInUser,
        googleSignIn
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;
