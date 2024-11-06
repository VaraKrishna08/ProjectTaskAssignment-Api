/*import { useEffect, useState } from "react";*/

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Task_Detail(){
    let params=useParams();
    const navigate=useNavigate();
    const[tasks,setTask]=useState({});
    useEffect(()=>{
    fetch("http://localhost:3001/getbyid/ "+params.id,
    {
        method:"GET"
    })
    .then((res)=>{return res.json()})
    .then((res)=>{
        setTask(res);
    });
    },[])
    return <>
    <div class="card ">
   
      <div class="card-body">   
      
      <div class="container text-center">
  <div class="row row-cols-2">
    <div class="col fs-4 ">ID   </div>
    
    <div class="col  fs-4">{tasks.AssignmentId}</div>

    <div class="col fs-4">Project ID</div>
    <div class="col fs-4">{tasks.ProjectId}</div>

    <div class="col  fs-4">AssignedTo</div>
    <div class="col fs-4">{tasks.AssignedTo}</div>

    <div class="col  fs-4">TaskDescription</div>
    <div class="col  fs-4">{tasks.TaskDescription}</div>

    <div class="col  fs-4">Deadline</div>
    <div class="col  fs-4">{tasks.Deadline}</div>
  </div>
</div>
      <button class="btn btn-outline-success" 
      onClick={()=>{
        navigate("/update/"+params.id);
      }}>Edit</button>

    
      <button class="btn btn-outline-danger"
        onClick={()=>{
        fetch("http://localhost:3001/delete/"+params.id,
        {
            method:"DELETE"
        })
        .then(()=>{ navigate("/getall");});
        }}
      >Delete</button> 
      </div>
    </div>
    </>
}
export default Task_Detail;

/*<div class="row">
      <div class="col text-bold">Id:</div>
       <div class="col">{tasks.AssignmentId}</div></div>

       <div class="row">
      <div class="col">ProjectId: 
      <div class="col"></div>{tasks.ProjectId}</div></div>

      <div class="row">
      <div class="col">AssignedTo: 
      <div class="col"></div>{tasks.AssignedTo}</div></div>

      <div class="row">
      <div class="col">TaskDescription :
      <div class="col"></div> {tasks.TaskDescription}</div></div>
      
      <div class="row">
      <div class="col">Deadline:
      <div class="col"></div> {tasks.Deadline}</div></div>
*/