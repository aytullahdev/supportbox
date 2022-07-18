import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getTickets, reset } from '../features/tickets/ticketSlice';
import SingleTicket from '../compuntnts/SingleTicket';

const Mytickets = () => {
    const dispatch = useDispatch();
    const {tickets, isSuccess} = useSelector(state=>state.ticket);
    useEffect(()=>{
        dispatch(getTickets());
        dispatch(reset());
       
        
    },[dispatch])
    return (
        <div>
            <h1 className='text-xl uppercase font-semibold text-center py-5'>Your Tickets Are</h1>
            <div className='flex flex-col space-y-1'>
                {tickets?.tickets && tickets.tickets.map((st)=>{
                    return <SingleTicket issue={st.product} id={st._id} desc={st.description} status={st.status}/>
                })}
            </div>
        </div>
    );
};

export default Mytickets;