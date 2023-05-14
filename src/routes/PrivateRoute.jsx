import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loding} = useContext(AuthContext)
    if(loding){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return <Navigate to={'/'}></Navigate>
};

export default PrivateRoute;