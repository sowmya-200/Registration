import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  AddStudent(url:string,student:any):any
  {
    return this.http.post(url,student)
  }
  GetStudent(url:string):any
  {
    return this.http.get(url);
  }
  UpdateStudent(url:string,student:any):any
  {
    return this.http.put(url,student);
  }
  DeleteStudent(url:string):any
  {
    return this.http.delete(url);
  }
  GetStudentById(url:string):any
  {
    return this.http.get(url);
  }
}
