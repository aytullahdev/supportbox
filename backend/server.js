const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8000;
const {errorHandler} = require('./middleware/errorMiddleware.js')


const app = express();
//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.use('/api/users',require('./routes/userRoutes'));
app.use(errorHandler)
app.get('/',(req,res)=>{
    res.json({message:"Welcome To My server"});
})
app.listen(PORT,()=>{
    console.log("Server Started on "+PORT);
})