import React from 'react';
import useRole from '../hook/useRole';
import LoadingSpinner from '../component/loading/LoadingSpinner';
import { Navigate } from 'react-router-dom';

const GuidePrivate = ({children}) => {
    const{role,isLoading}=useRole()
    
    if(isLoading) return <LoadingSpinner/>
    if(role?.role==='Guide') return children
    return (
        <div>
            <Navigate to={'/'}/>
        </div>
    );
};

export default GuidePrivate;