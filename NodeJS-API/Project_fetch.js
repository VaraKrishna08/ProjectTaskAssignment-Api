const express=require('express');
const mongoose=require('mongoose');
const cors=require("cors")
const bodyParser=require('body-parser');
const Project_task=require('./Project_task');

mongoose.connect("mongodb://localhost:27017/Project_task").then(()=>{
    console.log("Server connected successfully");
    const app=express();
    app.use(cors());
    app.use(bodyParser.urlencoded());
    app.use(express.json())

    app.get("/getall",async(req,res)=>{
        const data=await Project_task.find();
        res.json(data);
    });

    app.get("/getbyid/:id",async(req,res)=>{
        const result=await Project_task.findOne({AssignmentId:req.params.id});
        res.json(result);
    });

    app.post("/insert",async(req,res)=>{
        const{AssignmentId,ProjectId,AssignedTo,TaskDescription,Deadline}=req.body;
        const project_task=Project_task();
        project_task.AssignmentId=AssignmentId;
        project_task.ProjectId=ProjectId;
        project_task.AssignedTo=AssignedTo;
        project_task.TaskDescription=TaskDescription;
        project_task.Deadline=Deadline;
        const result=await project_task.save();
        res.json(result);
    });

    app.put("/update/:id",async(req,res)=>{
        const result=await Project_task.findOne({AssignmentId:req.params.id});
        const{AssignedTo,TaskDescription,Deadline}=req.body;
        result.AssignedTo=AssignedTo;
        result.TaskDescription=TaskDescription;
        result.Deadline=Deadline;
        result.save();
        res.json(result);
    });

    app.delete("/delete/:id",async(req,res)=>{
        const result=await Project_task.deleteOne({AssignmentId:req.params.id});
        res.json(result);
    });

    app.listen(3001,()=>{
        console.log("server started...");
    });
});