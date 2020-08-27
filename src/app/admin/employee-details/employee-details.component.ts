import { Component, OnInit } from '@angular/core';

import { faPencilAlt,faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  //required Icons
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  
  constructor() { }

  ngOnInit(): void {
  }

}
