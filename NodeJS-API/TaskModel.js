const mongoose=require('mongoose')
const schema=mongoose.Schema({
    AssignmentId:Number,
    ProjectId:Number,
    AssignedTo:String,
    TaskDescription:String,
    Deadline:Date,
  
})

module.exports=mongoose.model('Project_task',schema);
