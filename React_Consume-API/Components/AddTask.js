import { useState } from "react";
import { useNavigate} from "react-router-dom";

function AddTask() {
  const navigate=useNavigate();
  const[tasks,setTask]=useState({});

  return (
    <>
    <table class="table table-hover  table-bordered border-danger " >
    <tbody>

    <tr>
        <td>Enter AssignmentId:</td>
        <td>
            <input 
                value={tasks.AssignmentId}
                onChange={(e)=>{
                setTask({...tasks,AssignmentId:e.target.value});
            }} type="text" placeholder="Enter AssignmentId" />
        </td>
    </tr>
        
    <tr>
        <td>Enter ProjectId:</td>
        <td>
            <input 
                value={tasks.ProjectId}
                onChange={(e)=>{
                setTask({...tasks,ProjectId:e.target.value});
            }} type="text" placeholder="Enter ProjectId"/>
        </td>
    </tr>

    <tr>
        <td>Enter AssignedTo:</td>
        <td>
            <input 
                value={tasks.AssignedTo}
                onChange={(e)=>{
                setTask({...tasks,AssignedTo:e.target.value});
            }} type="text" placeholder="Enter AssignedTo"/>
        </td>
    </tr>

    <tr>
        <td>Enter TaskDescription:</td>
        <td>
            <input 
                value={tasks.TaskDescription}
                onChange={(e)=>{
                setTask({...tasks,TaskDescription:e.target.value});
            }} type="text" placeholder="Enter TaskDescription"/>
        </td>
    </tr>

    <tr>
        <td>Enter Deadline:</td>
        <td>
            <input 
                value={tasks.Deadline}
                onChange={(e)=>{
                setTask({...tasks,Deadline:e.target.value});
            }} type="text" placeholder="Enter Deadline"/>
        </td>
    </tr>
    </tbody>
    </table>

    <div style={{ textAlign: 'center' }}>
      <button className="btn btn-outline-info " onClick={()=>{
    
        fetch("http://localhost:3001/insert",
        {
            method:"POST",
            body:JSON.stringify(tasks),
            headers:{
                "Content-type":"application/json"
            }
        })
        .then(()=>{navigate("/getall")});
      }}>
        Add
      </button>
    </div>
    </>
  );
}
export default AddTask;