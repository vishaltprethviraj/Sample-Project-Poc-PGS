import { Component, OnInit } from '@angular/core';
import { faPencilAlt,faTrash } from '@fortawesome/free-solid-svg-icons';
import { Question } from './question.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  //required Icons
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  
  questions: Question[];

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.questions = this.adminService.getQuestion();
  }

}
