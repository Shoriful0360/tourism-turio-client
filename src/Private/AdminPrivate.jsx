import { Navigate } from "react-router-dom";
import LoadingSpinner from "../component/loading/LoadingSpinner";
import useAuth from "../hook/useAuth";import useRole from "../hook/useRole";
import { useState } from "react";


const AdminPrivate = ({children}) => {
const {user,loading}=useAuth()
    const{role,isLoading}=useRole()
    console.log({user,role,loading,isLoading})
    if(loading || isLoading) return <LoadingSpinner/>
    if(user && role?.role==='Admin') return children
    return (
        <div>
            <Navigate to={'/'}/>
        </div>
    );
};

export default AdminPrivate;