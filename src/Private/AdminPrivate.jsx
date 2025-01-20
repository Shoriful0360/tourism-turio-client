import { Navigate } from "react-router-dom";
import LoadingSpinner from "../component/loading/LoadingSpinner";
import useAuth from "../hook/useAuth";import useRole from "../hook/useRole";


const AdminPrivate = ({children}) => {

    const{role,isLoading}=useRole()
    
    if(isLoading) return <LoadingSpinner/>
    if(role?.role==='Admin') return children
    return (
        <div>
            <Navigate to={'/'}/>
        </div>
    );
};

export default AdminPrivate;