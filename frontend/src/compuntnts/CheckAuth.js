import React from 'react';
import {Navigate, useLocation} from 'react-router-dom'
import {useSelector} from 'react-redux'
const CheckAuth = ({children}) => {
   const location = useLocation();
   const {user} = useSelector(state=>state.auth);
   if(user){
        return <Navigate to="/" state={{from:location}} replace/>
   }
   return children;
};

export default CheckAuth;