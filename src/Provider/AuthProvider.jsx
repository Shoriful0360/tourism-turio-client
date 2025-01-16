import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {   createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";
import useAxiosPublic from "../hook/useAxiosPublic";


export const authContext=createContext()

const AuthProvider = ({children}) => {
const [user,setUser]=useState()
const axiosPublic=useAxiosPublic()
const [loading,setLoading]=useState(false)

// create user
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

// signin with email and password
const userSignIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// signin with google
const signInWithGoogle=()=>{
    const provider=new GoogleAuthProvider()
    setLoading(true)
    return signInWithPopup(auth,provider)
}

// update profile
const profileUpdate=(name,imageUrl)=>{
setLoading(true)
return updateProfile(auth.currentUser,{
    displayName:name,photoURL:imageUrl
})
}

// signout 
const logOut=()=>{
    return signOut(auth)
}
// on auth state change
useEffect(()=>{
    const unSubscripe=onAuthStateChanged(auth,async(currentUser)=>{
        if(currentUser?.email){
            setUser(currentUser)
        
            await axiosPublic.post('/jwt',{email:user?.email})
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('token',res.data.token)
                        setLoading(false)
                    }
                })
            

        }
        else{
            setUser(currentUser)
            if(!loading){
                localStorage.removeItem('token')
                setLoading(false)
            }
        }
    })

    return ()=>{
        unSubscripe()}
},[])


    const authInfo={
        user,createUser,setUser,signInWithGoogle,logOut,profileUpdate,userSignIn
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