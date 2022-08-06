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
import NewTickets from './pages/NewTickets';
import Mytickets from './pages/Mytickets';
import SingleTicket from './compuntnts/SingleTicket';
import SinglelTicketData from './compuntnts/SinglelTicketData';
function App() {
  return (
    <div className='container px-10 py-2'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<CheckAuth><Login/></CheckAuth>}/>
        <Route path='/register' element={<CheckAuth><Register/></CheckAuth>}/>
        <Route path='/test' element={<RequireAuth><Test/></RequireAuth>}/>
        <Route path='/new-ticket' element={<RequireAuth><NewTickets/></RequireAuth>}/>
        <Route path='/my-tickets' element={<RequireAuth><Mytickets/></RequireAuth>}/>
        <Route path='/my-tickets/:id' element={<RequireAuth><SinglelTicketData/></RequireAuth>}/>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
