import { Component, OnInit } from '@angular/core';
import { faPencilAlt,faTrash } from '@fortawesome/free-solid-svg-icons';

import { Designation } from './designation.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  //required Icons
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  designations: Designation[];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.designations = this.adminService.getDesignation();
  }

}
