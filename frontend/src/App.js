import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './compuntnts/Header';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
function App() {
  return (
    <div className='container px-10 py-2'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
