import { Component, OnInit } from '@angular/core';
import { Department } from '../department/department.model';
import { AdminService } from '../admin.service';
import { Designation } from '../designation/designation.model';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  constructor(private adminService:AdminService) { }
  
  departments : Department[];
  designations : Designation[];

  ngOnInit(): void {
    this.departments = this.adminService.getDepartment();
    this.designations = this.adminService.getDesignation();
  }

}
