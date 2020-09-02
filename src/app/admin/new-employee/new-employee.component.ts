import { Component, OnInit, ViewChild } from '@angular/core';
import { Department } from '../department/department.model';
import { AdminService } from '../admin.service';
import { Designation } from '../designation/designation.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  constructor(private adminService:AdminService) { }
  
  departments : Department[];
  designations : Designation[]; 

  @ViewChild('f') newEmployeeForm: NgForm;
   
  defaultDepartment: number; 
  defaultDesignation: number; 

  ngOnInit(): void {  
    this.departments = this.adminService.getDepartment();
    this.designations = this.adminService.getDesignation();           
  }  
  
  onSubmit() {
    console.log(this.newEmployeeForm);
  }
}
