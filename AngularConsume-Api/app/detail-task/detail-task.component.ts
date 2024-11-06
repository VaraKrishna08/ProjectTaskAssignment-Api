import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiTaskService } from '../api-task.service';
import { Task } from '../task';

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrl: './detail-task.component.css'
})

export class DetailTaskComponent {
  id=0;
  data: Task=new Task();
  constructor(private actRoute:ActivatedRoute,private api:ApiTaskService,private router:Router){
  
  }
  ngOnInit(){
    this.id=this.actRoute.snapshot.params['id'];
    this.api.getTasksById(this.id).subscribe((res:any)=>{
      this.data=res;
    });
  }
  delete(){
    this.api.deleteTasks(this.id).subscribe((res:any)=>{
      this.router.navigate(['/tasks']);
    });
  }
}
