const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8000;
const cors=require("cors");

const {errorHandler} = require('./middleware/errorMiddleware.js')
const connectDB = require('./config/db')

connectDB();
const app = express();
//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.use('/api/users',require('./routes/userRoutes'));
app.use('/api/tickets',require('./routes/ticketRoutes'));
app.use(errorHandler)

app.get('/',(req,res)=>{
    res.json({message:"Welcome To My server"});
})
app.listen(PORT,()=>{
    console.log("Server Started on "+PORT);
})