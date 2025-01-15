import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import {   createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";


export const authContext=createContext()

const AuthProvider = ({children}) => {
const [user,setUser]=useState()
const [loading,setLoading]=useState(false)

// create user
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

// signin with google
const signInWithGoogle=()=>{
    const provider=new GoogleAuthProvider()
    setLoading(true)
    return signInWithPopup(auth,provider)
}

// signout 
const logOut=()=>{
    return signOut(auth)
}
// on auth state change
useEffect(()=>{
    const unSubscripe=onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser?.email){
            setUser(currentUser)
        }
        else{
            setUser(currentUser)
            setLoading(false)
        }
    })

    return ()=>{
        unSubscripe()}
},[])


    const authInfo={
        user,createUser,setUser,signInWithGoogle,logOut
    }
    return (
        <div>
           <authContext.Provider value={authInfo}>
            {children}
           </authContext.Provider>
        </div>
    );
};

export default AuthProvider;