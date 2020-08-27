import { Component, OnInit } from '@angular/core';
import { faPencilAlt,faTrash } from '@fortawesome/free-solid-svg-icons';

import { Designation } from './designation.model';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  //required Icons
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  designations: Designation[] = [
    new Designation(1, 'Regional Director'),
    new Designation(2, 'System Architect'),
    new Designation(3, 'Full Stack Developer'),
    new Designation(4, 'Junior Software Engineer'),
    new Designation(5, 'Software Engineer Trainee'),
    new Designation(6, 'Accountant'),
    new Designation(7, 'Business Analyst')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
