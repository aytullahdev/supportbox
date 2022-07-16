import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './compuntnts/Header';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckAuth from './compuntnts/CheckAuth';
import Test from './pages/Test';
import RequireAuth from './compuntnts/RequireAuth';
function App() {
  return (
    <div className='container px-10 py-2'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<CheckAuth><Login/></CheckAuth>}/>
        <Route path='/register' element={<CheckAuth><Register/></CheckAuth>}/>
        <Route path='/test' element={<RequireAuth><Test/></RequireAuth>}/>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
