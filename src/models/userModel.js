const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    Name: String,
    balance:Number,
    adress:String,
    age:Number,
    
    gender: {
        type: String,
        enum: ["male", "female", "others"] 
    },
    isFreeAppUser: false   
 }, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array