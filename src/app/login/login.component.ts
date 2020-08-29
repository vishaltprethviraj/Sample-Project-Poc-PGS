import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import {  faClipboardList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //required Logo
  faClipboardList = faClipboardList;

  //creating a form
  loginForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(null),
      'password': new FormControl(null)
    });
  }

}
