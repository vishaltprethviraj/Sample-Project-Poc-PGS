import { Component, OnInit } from '@angular/core';
import { faPencilAlt,faTrash} from '@fortawesome/free-solid-svg-icons';

import { Department } from './department.model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  //required Icons
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  departments: Department[] = [
    new Department(1,'Web Development'),
    new Department(2,'Analytics'),
    new Department(3,'Business'),
    new Department(4,'Accountancy')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
