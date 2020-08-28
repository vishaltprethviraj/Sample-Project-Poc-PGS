import { Component, OnInit } from '@angular/core';
import { faPencilAlt,faTrash} from '@fortawesome/free-solid-svg-icons';

import { Department } from './department.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  //required Icons
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  departments: Department[]; 
  
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.departments = this.adminService.getDepartment();
  }

}
