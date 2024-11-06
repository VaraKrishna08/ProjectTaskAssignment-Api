import { Component } from '@angular/core';
import { ApiTaskService } from '../api-task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})

export class AddTaskComponent {

  id=-1;
  btnName="Add tasks";
  constructor(private api:ApiTaskService,private router:Router,private actRou:ActivatedRoute){}
  myForm=new FormGroup({
    AssignmentId:new FormControl(''),
    ProjectId:new FormControl(''),
    AssignedTo:new FormControl(''),
    TaskDescription:new FormControl(''),
    Deadline:new FormControl(''),
   
  });
  ngOnInit(){
    if(this.actRou.snapshot.params['id']!=null){
      this.btnName="Edit Tasks";
      this.id=this.actRou.snapshot.params['id'];
      this.api.getTasksById(this.id).subscribe((res:any)=>{
        this.myForm.controls.AssignmentId.setValue(res.AssignmentId);
        this.myForm.controls.ProjectId.setValue(res.ProjectId);
        this.myForm.controls.AssignedTo.setValue(res.AssignedTo);
        this.myForm.controls.TaskDescription.setValue(res.TaskDescription);
        this.myForm.controls.Deadline.setValue(res.Deadline);
     
      });
    }
  }
  insert(){
    if(this.id>0){
      this.api.updateTasks(this.id,this.myForm.value).subscribe((res)=>{
        this.router.navigate(['/tasks']);
    });
    }
    else{
      this.api.insertTasks(this.myForm.value).subscribe((res)=>{
        this.router.navigate(['/tasks']);
        
    });
    }
  }
}
