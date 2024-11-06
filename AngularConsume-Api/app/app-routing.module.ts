import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { DetailTaskComponent } from './detail-task/detail-task.component';

const routes: Routes = [
  {
    path:"tasks",
    component:TasksComponent
  },

  {
    path:"tasks/add",
    component:AddTaskComponent
  },
  {
    path:"tasks/edit/:id",
    component:AddTaskComponent
  },
  {
    path:"tasks/:id",
    component:DetailTaskComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
