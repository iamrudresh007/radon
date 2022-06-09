const mongoose = require('mongoose');

const authorModel= new mongoose.Schema( {
    author_Name: {
        type:String,
    }, 
  author_id: {
        type:Number,
        require:true
  },
   
   price:Number,
   rating:Number
   },{timestamps:true})
 

module.exports = mongoose.model('Book', authornpmModel) 

