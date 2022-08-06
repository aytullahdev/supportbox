import React from 'react';
import { NavLink } from 'react-router-dom';
const SingleTicket = ({issue,status,date,id}) => {
    return (
        <div>
            <div className=' grid grid-cols-4 bg-white border-[1px] outline-none cursor-pointer hover:shadow-none justify-center items-center py-3 text-black px-2'>
                    <div>{issue}</div>
                    <div className=''><span className={`text-sm  uppercase ${ status=='new'?'bg-green-400':status=='open'?'bg-blue-400':'bg-red-500'} p-3 rounded text-white`}>{status}</span></div>
                    <div>
                        <p>{new Date(date).toLocaleDateString('en-US')}</p>
                    </div>
                    <div>
                        <NavLink to={`/my-tickets/${id}`} className='hover:bg-orange-600 bg-orange-500 text-white p-2 rounded'>View Ticket</NavLink>
                    </div>
                </div>
        </div>
    );
};

export default SingleTicket;