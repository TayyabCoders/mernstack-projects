const mongoose = require("mongoose");



const userAccount_Model = mongoose.Schema(
    {

        userName :{
            type:String,
            required:[true,'Please enter your user name'],
            unique:true
        },

        userEmail:{
            type:String,
            required:[true,'Please enter your user email'],
            unique:true
        },

        userPassword:{
            type:String,
            required:[true,'Please enter your user password']
        },
        userProfile:{
            type:String
        },
        createdAt: { 
            type: Date, 
            default: Date.now 
        },
         
    }

)





module.exports = mongoose.model('userAccount',userAccount_Model);
