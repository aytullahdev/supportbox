const asyncHandler = require('express-async-handler')

const User = require('../models/userModels')
const Ticket = require('../models/ticketModels');

// @desc Get user tickets
// @route /api/tickets
// @access Private
const getTickets = asyncHandler(async (req,res)=>{
    // Get user using the id using jWT
    const user = await User.findById(req.user.id);
    if(!user){
        res.status(401)
        throw new Error("User Not found");
    }
    const tickts = await Ticket.find({user:req.user.id});
    res.status(200).json({tickts});
})

// @desc Create user ticket
// @route /api/tickets
// @access Private
const createTicket = asyncHandler(async (req,res)=>{
    const {product,description} = req.body
    if(!product || !description){
        res.status(400)
        throw new Error("Please add a product and Description")
    }
     // Get user using the id using jWT
     const user = await User.findById(req.user.id);
     if(!user){
         res.status(401)
         throw new Error("User Not found");
     }
     const ticket = await Ticket.create({
        product,
        description,
        user:req.user.id,
        status:'new'
     })
    res.status(200).json({ticket});
})


module.exports={
    getTickets,
    createTicket
}
