import React from 'react';
import { useSelector } from 'react-redux';
const Home = () => {
    const {user} = useSelector(state=>state.auth);
    return (
        <div className=' font-bold text-4xl text-center py-2'>
           Welcome  {user.email}
        </div>
    );
};

export default Home;