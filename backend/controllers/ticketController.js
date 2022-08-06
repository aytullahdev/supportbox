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
    const tickets = await Ticket.find({user:req.user.id}).sort({createdAt:-1});
    res.status(200).json({tickets});
})

// @desc Get user ticket
// @route /api/tickets
// @access Private
const getTicket = asyncHandler(async (req,res)=>{
    // Get user using the id using jWT
    const user = await User.findById(req.user.id);
    if(!user){
        res.status(401)
        throw new Error("User Not found");
    }
    const ticket = await Ticket.findById(req.params.id);
    if(!ticket){
        res.status(401)
        throw new Error("Tickets wasn't Found");
    }
    if(ticket.user.toString() !== req.user.id){
        res.status(400)
        throw new Error ("Not Authorized")
    }
    res.status(200).json({ticket});
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

// @desc Delete  user ticket
// @route DELETE /api/ticket/:id
// @access Private
const deleteTicket = asyncHandler(async (req,res)=>{
    // Get user using the id using jWT
    const user = await User.findById(req.user.id);
    if(!user){
        res.status(401)
        throw new Error("User Not found");
    }
    const ticket = await Ticket.findById(req.params.id);
    if(!ticket){
        res.status(401)
        throw new Error("Tickets wasn't Found");
    }
    if(ticket.user.toString() !== req.user.id){
        res.status(400)
        throw new Error ("Not Authorized")
    }
    await ticket.remove();
    res.send(200).json({sucess:true});
})
// @desc UPDATE user ticket
// @route PUT /api/ticket/:id
// @access Private
const updateTicket = asyncHandler(async (req,res)=>{
    // Get user using the id using jWT
    const user = await User.findById(req.user.id);
    if(!user){
        res.status(401)
        throw new Error("User Not found");
    }
    const ticket = await Ticket.findById(req.params.id);
    if(!ticket){
        res.status(401)
        throw new Error("Tickets wasn't Found");
    }
    if(ticket.user.toString() !== req.user.id){
        res.status(400)
        throw new Error ("Not Authorized")
    }
    const updateTicket = await Ticket.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updateTicket);
})
module.exports={
    getTickets,
    createTicket,
    getTicket,
    deleteTicket,
    updateTicket
}
