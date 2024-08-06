const mongoose = require('mongoose');

const taskSchema=new mongoose.Schema({
  name:{
    type:String,
    required:[true,'Task name cannot be empty'],
    trim:true,
    maxlength:[20,'Task name cannot exceed 20 characters']
  },
  completed:{
    type:Boolean,
    default:false
  },
})


module.exports=mongoose.model('Task',taskSchema)
