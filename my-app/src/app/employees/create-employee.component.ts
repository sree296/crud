import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../node_modules/@angular/forms';
import {Department} from '../models/department.model';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {Employee} from '../models/employee.model';
import {EmployeeService} from './employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

//department = "3";
previewPhoto = false;

employee: Employee = {
  id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: "select",
    isActive: null,
    photoPath: null
};
togglePhotoPreview(){
  this.previewPhoto = !this.previewPhoto;
}
  datePickerConfig : Partial<BsDatepickerConfig>;

  departments : Department[] = [
    {id:1, name:"Help Desk"},
    {id:2, name:"HR"},
    {id:3, name:"IT"},
    {id:4, name:"Payroll"},
    {id:5, name:"Admin"}
  ];
  constructor(private _employeeService : EmployeeService, private _router: Router) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        dateInputFormat : 'DD/MM/YYYY'
      })
   }

  ngOnInit() {
  }

  saveEmployee() : void{
   this._employeeService.save(this.employee);
   this._router.navigate(['list']);
  } 
}
