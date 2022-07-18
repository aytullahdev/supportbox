import React from 'react';
import {useSelector,useDispatch} from  'react-redux'
import { createTicket, reset } from '../features/tickets/ticketSlice';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
const NewTickets = () => {
    const dispatch = useDispatch();
     const {isLoading,message,isError,isSuccess} = useSelector(state=>state.ticket);
    const {user} = useSelector(state=>state.auth);
    const [name] = useState(user.name)
    const [email] = useState(user.email)
    const [product,setProduct] = useState('React');
    const [description,setDescription] = useState('')
    const handleSubmit=()=>{
        const data={
            product,
            email,
            description,
            name,
        }
        dispatch(createTicket(data))
        
    }
    const navigate = useNavigate();
    useEffect(() => {
        if(!isLoading && isSuccess){
            toast.success("Ticket is Created")
            navigate('/my-tickets');
        }
        if(isError){
            toast.error(message);
        }
        dispatch(reset());
    }, [isError,isSuccess,dispatch])
    
    return (
        <div >
            <h1 className='text-3xl text-center py-5'>NEW TICKETS</h1>
            <div className='flex flex-col space-y-4 w-2/3 lg:w-1/3 mx-auto'>
                <div>
                    <label htmlFor="name" className=' font-semibold'>Customer Name</label>
                    <input type="text" id='name' className='block mt-2  py-3 px-4 w-full border-black rounded border outline-none bg-white' value={name} disabled />
                </div>
                <div>
                    <label htmlFor="email" className=' font-semibold'>Customer Email</label>
                    <input type="text" id='email' className='block mt-2 py-3 px-4 w-full border-black rounded border outline-none bg-white' value={email} disabled />
                </div>
                <div>
                    <label htmlFor="issue" className=' font-semibold'>Issue Type</label>
                   <select id='issue' className='block mt-2 rounded border outline-none bg-white border-black w-1/3 py-3' value={product} onChange={e=>setProduct(e.target.value)}>
                    <option value="React">React</option>
                    <option value="Javascript">Javascript</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>

                   </select>
                </div>
                <div>
                    <label htmlFor="desc" className=' font-semibold'>Issue Description</label>
                    <textarea type="text" id='desc' className='block mt-2  py-3 px-4 w-full border-black rounded border outline-none bg-white' value={description}  onChange={e=>setDescription(e.target.value)} />
                </div>
                <div>
                    <button onClick={()=>{ handleSubmit()}} className='bg-green-400 text-white py-4 px-10 rounded' disabled={isLoading}>
                    {isLoading && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 animate-spin mr-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clip-rule="evenodd"
                  />
                </svg>
              )}
                    {!isLoading && <p>Create Ticket</p>}</button>
                </div>
            </div>
        </div>
    );
};

export default NewTickets;