import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    let {user, loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-spinner text-primary"></span>;
    }

    if(user){
        return children;
    }

    return (
        <div>
            <Navigate to="/login"></Navigate>
        </div>
    );
};

export default PrivateRoutes;