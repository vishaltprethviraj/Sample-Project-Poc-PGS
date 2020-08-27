import { Component, OnInit } from '@angular/core';
import { faPencilAlt,faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  //required Icons
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  constructor() { }

  ngOnInit(): void {
  }

}
