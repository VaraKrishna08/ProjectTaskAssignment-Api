import { Component } from '@angular/core';
import { ApiTaskService } from '../api-task.service';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  data: Task[] = [];
  constructor(private api:ApiTaskService){

  }
  ngOnInit(){
    this.api.getAllTasks().subscribe((res:any)=>{
      this.data=res;
      console.log(this.data);
    });
  }
  delete(id:any){
    this.api.deleteTasks(id).subscribe((res)=>{
      this.ngOnInit();
    })
  }
}