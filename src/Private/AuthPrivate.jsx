import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../component/loading/LoadingSpinner";
import useAuth from "../hook/useAuth";


const AuthPrivate = ({children}) => {
    const location=useLocation()
    const {user,loading}=useAuth()

    if(loading) return <LoadingSpinner/>
    if(user) return children
    return (
        <div>
           <Navigate to={'/signIn'} state={{ from: location }} replace='true'/> 
        </div>
    );
};

export default AuthPrivate;