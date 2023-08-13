import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

export class Student{
  StudentId!:number;
  FirstName!:string;
  LastName!:string;
  Dob!:string;
  Age!:number;
  PhoneNumber!:number;
}
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student:Student=new Student();
  allStudent:Student[]=[];

// url:string="https://localhost:44322/api/";

  constructor( private studentService:StudentService ) { }

  ngOnInit(): void {
    this.GetStudent();
  }

  AddStudent():void{
    this.studentService.AddStudent('https://localhost:44322/api/Student/AddStudent/',this.student).subscribe((responce:any)=>{
      if(responce!=null)
      {
        alert("Data is Saved");
      }
      else{
        alert("Data is Failed to load")
      }
    });
  }

  GetStudent():void{
 this.studentService.GetStudent('https://localhost:44322/api/Student/GetStudent').subscribe((resp:any) => {
 this.allStudent=resp;
 });
  }

  UpdateStudent():void{

    this.studentService.UpdateStudent('https://localhost:44322/api/Student/UpdateStudent/',this.student).subscribe((resp:any)=>{
    if(resp!=null)
    {
      alert("Data Updated");
    }
    else{
      alert("Data Not Updated");
    }
    });
  }
  DeleteStudent(StudentId:number):void{
    this.studentService.DeleteStudent('https://localhost:44322/api/Student/DeleteStudent/'+StudentId).subscribe((resp:any)=>{
    if(resp!=null)
    {
      alert("Data Deleted");
    }
    else{
      alert("Data Not Deleted");
    }
    });
  }

  GetStudentById(StudentId:number):void{
    debugger
    this.studentService.GetStudentById('https://localhost:44322/api/Student/GetStudentById/'+StudentId).subscribe((resp:any)=>{
    this.student=resp;
    });
  }

}
