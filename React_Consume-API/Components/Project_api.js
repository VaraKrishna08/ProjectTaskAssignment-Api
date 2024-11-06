import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Project_api() {
  const [tasks, setTask] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/getall")
      .then((res) => res.json())
      .then((res) => setTask(res));
  }, []);

  const formatedTask= tasks.map((temp) => {
    return (
      <div class="card col-md-6 mb-3 border border-info  rounded ">
      
          <h4 class="card-text">AssignmentId: {temp.AssignmentId}</h4>
          <h4 class="card-text  ">AssignedTo: {temp.AssignedTo}</h4>
          <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-outline-primary m-2" onClick={()=>{
            navigate("../getbyid/" + temp.AssignmentId);
          }}>View more</button> 

          <button class="btn btn-outline-danger m-2" onClick={()=>{
            fetch("http://localhost:3001/delete/" + temp.AssignmentId,
            {
              method:"DELETE"
            })
            .then(()=>{
              window.location.reload()
            })
          }}>Delete</button></div>
        </div>
    );
  });

  return (
    <div>
      <label>ADD Data </label>
      <button
        class="btn btn-outline-info m-3"
        onClick={() => {
          navigate("/insert");
        }}
      >
        Add
      </button>
      <div className="row m-2 p-2">{formatedTask}</div>
    </div>
  );
}

export default Project_api;