import { Component, OnInit } from '@angular/core';

import { faClipboardList,faTachometerAlt,faUser,faBook,faCaretRight,faCaretLeft } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  faClipboardList = faClipboardList;
  faTachometerAlt = faTachometerAlt;
  faUser = faUser;
  faBook = faBook;
  faCaretRight = faCaretRight;
  faCaretLeft = faCaretLeft;
  constructor() { }

  ngOnInit(): void {
  }

}
