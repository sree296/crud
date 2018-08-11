import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import {Department} from '../models/department.model';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

gender = "male";
isActive = true;  
department = "3";
previewPhoto = false;

employee: Employee = {
  id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null
};
togglePhotoPreview(){
  this.previewPhoto = !this.previewPhoto;
}
  departments : Department[] = [
    {id:1, name:"Help Desk"},
    {id:2, name:"HR"},
    {id:3, name:"IT"},
    {id:4, name:"Payroll"}
  ];
  constructor() { }

  ngOnInit() {
  }

  saveEmployee(newEmployee: Employee) : void{
    console.log(newEmployee);
  } 
}
