import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.consol';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(app)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loding, setLoading] = useState(true)

    const handaleSinup = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogins = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const handleGoogleSinin = () => {
        const googleProvider = new googleProvider
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {
        handaleSinup,
        handleLogins,
        user,
        logOut,
        handleGoogleSinin,
        loding
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;