import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.css']
})
export class NewSurveyComponent implements OnInit {

  constructor() { }

  newSurveyForm: FormGroup;

  ngOnInit(): void {
    this.newSurveyForm = new FormGroup({
      'name': new FormControl(null),
      'description': new FormControl(null),
      'thankYouMessage': new FormControl(null),
      'startDate': new FormControl(null),
      'endDate': new FormControl(null)
    });
  }


}
