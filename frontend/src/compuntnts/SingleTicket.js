import React from 'react';

const SingleTicket = ({issue,status,desc,id}) => {
    return (
        <div>
            <div className=' grid grid-cols-4 bg-gray-200 justify-center items-center py-3 text-black px-2'>
                    <div>{issue}</div>
                    <div className=''><span className={`${ status=='new'?'bg-green-400':status=='open'?'bg-blue-400':'bg-black'} p-3 rounded text-white`}>{status}</span></div>
                    <div>{desc}</div>
                    <div>
                        <button className='hover:bg-black bg-gray-500 text-white p-2 rounded'>View Ticket</button>
                    </div>
                </div>
        </div>
    );
};

export default SingleTicket;