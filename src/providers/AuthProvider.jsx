import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    // google provider
    const googleProvider = new GoogleAuthProvider();

    let [user, setUser] = useState(null);
    let [loading, setLoading] = useState(true);


    let createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    let loginUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    let logOutUser = ()=>{
        return signOut(auth);
    }

    // google registration
    let signInwithGoogle = ()=>{
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(()=>{
        let unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log("current user", currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return()=>{
            unSubscribe();
        }
    },[])


    // onAuthStateChanged(auth, currentUser =>{
    //     if(currentUser){
    //         console.log("currentUser available", currentUser);
    //         setUser(currentUser);
    //     }else{
    //         console.log("logged out");
    //         setUser(null)
    //     }
    // })

    let authInfo={
        createUser,
        loginUser,
        logOutUser,
        user,
        loading,

        // google
        signInwithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;