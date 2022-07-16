import React from 'react';
import {Navigate, useLocation} from 'react-router-dom'
import {useSelector} from 'react-redux'
const RequireAuth = ({children}) => {
    const location = useLocation();
   const {user} = useSelector(state=>state.auth);
   if(!user){
    return <Navigate to="/login" state={{from:location}} replace/>
   }
   return children;
};

export default RequireAuth;