import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getTickets, reset } from "../features/tickets/ticketSlice";
import SingleTicket from "../compuntnts/SingleTicket";

const Mytickets = () => {
  const dispatch = useDispatch();
  const { tickets, isSuccess } = useSelector((state) => state.ticket);
  useEffect(() => {
    dispatch(getTickets());
    dispatch(reset());
  }, [dispatch]);
  return (
    <div>
      <h1 className="text-xl uppercase font-semibold text-center py-5">
        Your Tickets Are
      </h1>
      <div>
        <div className=" grid grid-cols-4 bg-white uppercase font-semibold justify-center items-center py-3 text-black px-2">
             <div>
                Issues
             </div>
             
             <div>Status</div>
             <div>Date</div>
             <div>Options</div>
        </div>
      </div>
      <div className="flex flex-col space-y-1">
        {tickets?.tickets &&
          tickets.tickets.map((st) => {
            return (
              <SingleTicket
                issue={st.product}
                id={st._id}
                date={st.createdAt}
                status={st.status}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Mytickets;
