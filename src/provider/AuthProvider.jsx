import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.consol';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(app)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState({})

    const handaleSinup = (email,password) =>{
     return   createUserWithEmailAndPassword(auth,email,password)    
    }
    const handleLogins = (email,password)=>{
        return signInWithEmailAndPassword (auth,email,password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    
    const handleGoogleSinin = () =>{
        const googleProvider = new googleProvider
        return signInWithPopup(auth,googleProvider)
    }
    useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, loggedUser=>{
            setUser(loggedUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    const authInfo ={
        handaleSinup,
        handleLogins,
        user,
        logOut,
        handleGoogleSinin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;