import { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";

function EditTask() {
  const navigate=useNavigate();
  const params=useParams();
  const [tasks,setTask]=useState({});

  useEffect(()=>{
    fetch("http://localhost:3001/getbyid/" + params.id,
    {
        method:"GET"
    })
    .then((res)=>{return res.json();})
    .then((res)=>{
        setTask(res);
    });
  },[]);
  return (
    <>
    <table class="table table-hover  table-bordered border-danger ">
    <tbody>
    <tr>
        <td>Enter AssignedTo:</td>
        <td>
            <input 
                value={tasks.AssignedTo}
                onChange={(e)=>{
                setTask({...tasks,AssignedTo:e.target.value});
            }} type="text" />
        </td>
    </tr>

    <tr>
        <td>Enter TaskDescription:</td>
        <td>
            <input 
                value={tasks.TaskDescription}
                onChange={(e)=>{
                setTask({...tasks,TaskDescription:e.target.value});
            }} type="text" />
        </td>
    </tr>

    <tr>
        <td>Enter Deadline:</td>
        <td>
            <input 
                value={tasks.Deadline}
                onChange={(e)=>{
                setTask({...tasks,Deadline:e.target.value});
            }} type="text" />
        </td>
    </tr>
    </tbody>
    </table>

    <div style={{ textAlign: 'center' }}>
      <button className="btn btn-outline-info" onClick={()=>{
        //console.log(tasks);
        fetch("http://localhost:3001/update/"+params.id,
        {
            method:"PUT",
            body:JSON.stringify(tasks),
            headers:{
                "Content-type":"application/json"
            }
        })
        .then(()=>{navigate("/getbyid/"+params.id)});
      }}>
        Edit
      </button>
    </div>
    </>
  );
}
export default EditTask;