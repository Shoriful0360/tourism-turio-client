import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {   createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";
import useAxiosPublic from "../hook/useAxiosPublic";



export const authContext=createContext()

const AuthProvider = ({children}) => {
const [user,setUser]=useState()
const [packageItem,setPackageItem]=useState({})
const axiosPublic=useAxiosPublic()
const [loading,setLoading]=useState(true)

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

// reset password
const resetPassword=(email)=>{
  
    return sendPasswordResetEmail(auth,email)
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
        // setLoading(false)
            await axiosPublic.post('/jwt',{email:currentUser?.email})
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('token',res.data.token)
                        setLoading(false)
                    }
                })
               

                // user save in database
                await axiosPublic.post(`/user/${currentUser?.email}`,{
                    name:currentUser?.displayName,
                    email:currentUser?.email,
                    image:currentUser?.photoURL
                })
            

        }
        else{
            setUser(currentUser)
            if(!loading || !currentUser){
                localStorage.removeItem('token')
                setLoading(false)
            }
        }
    })

    return ()=>{
        unSubscripe()}
},[])


    const authInfo={
        user,createUser,setUser,signInWithGoogle,logOut,profileUpdate,userSignIn,loading,setLoading,resetPassword,setPackageItem,packageItem
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