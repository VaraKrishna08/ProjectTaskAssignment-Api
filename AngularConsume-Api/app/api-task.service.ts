import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiTaskService {
  apiUrl="http://localhost:3001/getall";
  constructor(private http:HttpClient) { }
  getAllTasks(){
    return this.http.get(this.apiUrl);
  }
  getTasksById(id:any){
    return this.http.get("http://localhost:3001/getbyid/"+id);
  }
  deleteTasks(id:any){
    return this.http.delete("http://localhost:3001/delete/"+id);
  }
  insertTasks(form:any){
    return this.http.post("http://localhost:3001/insert",form);
  }
  updateTasks(id:any,form:any){
    return this.http.put("http://localhost:3001/update/"+id,form);
  }
 
}
/*
getAllTasks(){
  return this.http.get(this.apiUrl);
}
getTasksById(id:any){
  return this.http.get(this.apiUrl+'/getbyid/'+id);
}
deleteTasks(id:any){
  return this.http.delete(this.apiUrl+'/delete/'+id);
}
insertTasks(form:any){
  return this.http.post(this.apiUrl,form);
}
updateTasks(id:any,form:any){
  return this.http.put(this.apiUrl+'/update/'+id,form);
}*/
