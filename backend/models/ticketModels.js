const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'User'
    },
    product:{
        type:String,
        required:[true,'Please Select a issue'],
        enum:['React issue','Javascript issue','HTML issue','Css issue']
    },
    description:{
        type:String,
        required:[true,'Please Enter a description'],
    },
    status:{
        type:String,
        require:true,
        enum:['new','open','closed'],
        default:'new'
    }
},
{
    timestamps:true,
})
module.exports=mongoose.model('Ticket',ticketSchema);