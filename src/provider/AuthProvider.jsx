import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/firebaseConfig';


export const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();

    const [user,setUser] = useState(null)
    const [loading,setLoading] =useState(true)
    


    const createUser = (email,password) => {
        setLoading(true)
      return  createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser =(email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword (auth,email,password)

    }
    
    const googleSignIn = () =>{
        setLoading(true)
        return  signInWithPopup(auth, googleProvider)

    }

    const updateProfileUser =(user,profile) =>{

        return updateProfile(user,profile)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged (auth, (currentUser) =>{
            setUser(currentUser)
            setLoading(false)
            
        })

        return () =>{
            unsubscribe()
        }
    }
    ,[])

    const signOutUser =() =>{
       return signOut(auth)
    }


    const authData = {
        user,
        loading,
        setUser,
        createUser,
        signInUser,
        googleSignIn,
        signOutUser,
        updateProfileUser
        
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;
